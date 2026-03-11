"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Edit, Trash2, Shield, User, ToggleLeft, ToggleRight, Eye, KeyRound } from "lucide-react";

const MANAGER_PERMISSION_OPTIONS = [
  { id: "posts", label: "Posts (dashboard)" },
  { id: "addPost", label: "Add Post" },
  { id: "allPosts", label: "All Posts" },
  { id: "categories", label: "Categories" },
  { id: "postRequests", label: "Post Requests" },
  { id: "ads", label: "Ads Setup" },
  { id: "pages", label: "Pages" },
  { id: "customise", label: "Customise (main)" },
  { id: "customiseHero", label: "Customise: Hero" },
  { id: "customiseMSONarrative", label: "Customise: MSO Narrative" },
  { id: "customiseRegionalSpecials", label: "Customise: Regional Specials" },
  { id: "customiseMSOStudio", label: "Customise: MSO Studio" },
  { id: "customiseMSOAwards", label: "Customise: MSO Awards" },
  { id: "customiseEventsCommunity", label: "Customise: Events & Community" },
  { id: "customiseKnowledgeLab", label: "Customise: Knowledge Lab" },
  { id: "customiseNewsIntel", label: "Customise: News & Intel" },
  { id: "customiseSpotlight", label: "Customise: Spotlight" },
  { id: "customiseHomepageOrder", label: "Customise: Homepage Order" },
  { id: "customiseHeader", label: "Customise: Header" },
  { id: "customiseFooter", label: "Customise: Footer" },
  { id: "customisePost", label: "Customise: Post" },
  { id: "customiseTalentPortal", label: "Customise: Talent Portal (Jobs)" },
  { id: "customiseSidebar", label: "Customise: Sidebar" },
  { id: "customiseSite", label: "Customise: Fonts" },
];

export default function SuperAdminUsers() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    role: "NORMAL_USER",
    autoShareEnabled: false,
  });
  const [permissionsModalUser, setPermissionsModalUser] = useState(null);
  const [permissionsForm, setPermissionsForm] = useState([]);
  const [savingPermissions, setSavingPermissions] = useState(false);
  const [loadingPermissionsModal, setLoadingPermissionsModal] = useState(false);
  const [roleFilter, setRoleFilter] = useState("all");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/superadmin/users", {
        credentials: "include",
        cache: "no-store",
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user._id);
    setEditForm({
      name: user.name,
      email: user.email,
      role: user.role || "NORMAL_USER",
      autoShareEnabled: user.autoShareEnabled || false,
    });
  };

  const openPermissionsModal = async (user, e) => {
    if (e) e.stopPropagation();
    if (user?.role !== "MANAGER") return;
    const userId = user._id?.toString?.() || user._id;
    const initialPerms = Array.isArray(user.managerPermissions) ? [...user.managerPermissions] : [];
    console.log("[Permissions modal] Open – user from list:", { userId, name: user.name, managerPermissions: user.managerPermissions, initialPerms });
    setPermissionsModalUser({ ...user, _id: userId });
    setPermissionsForm(initialPerms);
    setLoadingPermissionsModal(true);
    try {
      const response = await fetch(`/api/superadmin/users/${userId}?t=${Date.now()}`, {
        credentials: "include",
        cache: "no-store",
      });
      if (response.ok) {
        const data = await response.json();
        const freshUser = data.user || data;
        const perms = Array.isArray(freshUser.managerPermissions) ? [...freshUser.managerPermissions] : [];
        const freshId = freshUser._id?.toString?.() ?? freshUser._id;
        console.log("[Permissions modal] Fetched user – freshUser.managerPermissions:", freshUser.managerPermissions, "→ perms:", perms);
        setPermissionsForm(perms);
        setPermissionsModalUser((prev) => (prev?._id === freshId ? { ...prev, ...freshUser, _id: freshId, managerPermissions: perms } : prev));
      } else {
        console.warn("[Permissions modal] Fetch not ok:", response.status);
      }
    } catch (err) {
      console.error("[Permissions modal] Fetch error:", err);
    } finally {
      setLoadingPermissionsModal(false);
    }
  };

  const closePermissionsModal = () => setPermissionsModalUser(null);

  const togglePermission = (id) => {
    setPermissionsForm((prev) => {
      const next = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
      console.log("[Permissions modal] Toggle:", id, "→ form:", next);
      return next;
    });
  };

  const savePermissions = async () => {
    const userId = permissionsModalUser?._id?.toString?.() ?? permissionsModalUser?._id;
    if (!userId) return;
    console.log("[Permissions modal] Save – userId:", userId, "managerPermissions:", permissionsForm);
    setSavingPermissions(true);
    try {
      const response = await fetch("/api/superadmin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId,
          managerPermissions: permissionsForm,
        }),
      });
      if (response.ok) {
        console.log("[Permissions modal] Save success");
        await fetchUsers();
        closePermissionsModal();
        alert("Permissions updated.");
      } else {
        const data = await response.json();
        console.warn("[Permissions modal] Save failed:", response.status, data);
        alert(data.error || "Failed to update permissions");
      }
    } catch (err) {
      console.error("[Permissions modal] Save error:", err);
      alert("Failed to update permissions");
    } finally {
      setSavingPermissions(false);
    }
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/superadmin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: editingUser,
          ...editForm,
        }),
      });

      if (response.ok) {
        await fetchUsers();
        setEditingUser(null);
        alert("User updated successfully!");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  const handleDelete = async (userId) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`/api/superadmin/users?userId=${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchUsers();
        alert("User deleted successfully!");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const toggleAutoShare = async (userId, currentValue) => {
    try {
      const response = await fetch("/api/superadmin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          autoShareEnabled: !currentValue,
        }),
      });

      if (response.ok) {
        await fetchUsers();
      }
    } catch (error) {
      console.error("Error toggling auto-share:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">All Users</h1>
        <p className="text-sm text-gray-500 mt-1">Manage users and their permissions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm font-medium opacity-90">Total Users</div>
          <div className="text-3xl font-bold mt-2">{users.length}</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm font-medium opacity-90">Administrators</div>
          <div className="text-3xl font-bold mt-2">
            {users.filter((u) => u.role === "ADMIN").length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm font-medium opacity-90">Managers</div>
          <div className="text-3xl font-bold mt-2">
            {users.filter((u) => u.role === "MANAGER").length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm font-medium opacity-90">Auto-Share Enabled</div>
          <div className="text-3xl font-bold mt-2">
            {users.filter((u) => u.autoShareEnabled).length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="text-sm font-medium opacity-90">Regular Users</div>
          <div className="text-3xl font-bold mt-2">
            {users.filter((u) => u.role === "NORMAL_USER").length}
          </div>
        </div>
      </div>

      {/* Role Filter */}
      <div className="flex items-center gap-4">
        <label htmlFor="role-filter" className="text-sm font-medium text-gray-700">
          Filter by role:
        </label>
        <select
          id="role-filter"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
        >
          <option value="all">All Users</option>
          <option value="ADMIN">Administrators</option>
          <option value="MANAGER">Managers</option>
          <option value="NORMAL_USER">Regular Users</option>
        </select>
        <span className="text-sm text-gray-500">
          Showing {roleFilter === "all" ? users.length : users.filter((u) => u.role === roleFilter).length} of {users.length}
        </span>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Auto-Share
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Created
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(roleFilter === "all" ? users : users.filter((u) => u.role === roleFilter)).map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-colors cursor-pointer"
                  onClick={() => editingUser !== user._id && router.push(`/admin/users/${user._id}`)}
                >
                  <td className="px-6 py-4" onClick={(e) => editingUser === user._id && e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        {user.role === "ADMIN" ? (
                          <Shield size={18} className="text-purple-600" />
                        ) : user.role === "MANAGER" ? (
                          <Shield size={18} className="text-amber-600" />
                        ) : (
                          <User size={18} className="text-gray-400" />
                        )}
                        <span className="font-semibold text-gray-900">{user.name}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4" onClick={(e) => editingUser === user._id && e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      />
                    ) : (
                      <span className="text-sm text-gray-600">{user.email}</span>
                    )}
                  </td>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <select
                        value={editForm.role}
                        onChange={(e) =>
                          setEditForm({ ...editForm, role: e.target.value })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      >
                        <option value="NORMAL_USER">Normal User</option>
                        <option value="MANAGER">Manager</option>
                        <option value="ADMIN">Administrator</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "ADMIN"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "MANAGER"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.role === "ADMIN" ? "Administrator" : user.role === "MANAGER" ? "Manager" : "Normal User"}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditForm({
                            ...editForm,
                            autoShareEnabled: !editForm.autoShareEnabled,
                          });
                        }}
                        className="flex items-center gap-2"
                      >
                        {editForm.autoShareEnabled ? (
                          <ToggleRight size={24} className="text-green-600" />
                        ) : (
                          <ToggleLeft size={24} className="text-gray-400" />
                        )}
                        <span className="text-sm">
                          {editForm.autoShareEnabled ? "Enabled" : "Disabled"}
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAutoShare(user._id, user.autoShareEnabled);
                        }}
                        className="flex items-center gap-2"
                      >
                        {user.autoShareEnabled ? (
                          <ToggleRight size={24} className="text-green-600" />
                        ) : (
                          <ToggleLeft size={24} className="text-gray-400" />
                        )}
                        <span className="text-sm">
                          {user.autoShareEnabled ? "Enabled" : "Disabled"}
                        </span>
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {editingUser === user._id ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSave();
                            }}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                            title="Save"
                          >
                            ✓
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingUser(null);
                            }}
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition"
                            title="Cancel"
                          >
                            ✕
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/admin/users/${user._id}`);
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(user);
                            }}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          {user.role === "MANAGER" && (
                            <button
                              type="button"
                              onClick={(e) => openPermissionsModal(user, e)}
                              className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition"
                              title="Permissions"
                            >
                              <KeyRound size={18} />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(user._id);
                            }}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Permissions modal for Manager */}
      {permissionsModalUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closePermissionsModal}
          role="dialog"
          aria-modal="true"
          aria-label="Manager permissions"
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Manager permissions
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {permissionsModalUser.name} – choose what this manager can access.
            </p>
            {loadingPermissionsModal ? (
              <div className="py-8 text-center text-gray-500 text-sm">Loading permissions…</div>
            ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {MANAGER_PERMISSION_OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded"
                >
                  <input
                    type="checkbox"
                    checked={permissionsForm.includes(opt.id)}
                    onChange={() => togglePermission(opt.id)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-900">{opt.label}</span>
                </label>
              ))}
            </div>
            )}
            <div className="flex gap-2 mt-6">
              <button
                type="button"
                onClick={savePermissions}
                disabled={savingPermissions}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-sm font-medium"
              >
                {savingPermissions ? "Saving…" : "Save"}
              </button>
              <button
                type="button"
                onClick={closePermissionsModal}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

