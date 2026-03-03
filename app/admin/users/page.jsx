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
  { id: "customiseSpotlight", label: "Customise: Spotlight" },
  { id: "customiseMSOAwards", label: "Customise: MSO Awards" },
  { id: "customiseHomepageOrder", label: "Customise: Homepage Order" },
  { id: "customiseHeader", label: "Customise: Header" },
  { id: "customiseFooter", label: "Customise: Footer" },
  { id: "customisePost", label: "Customise: Post" },
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
        setUsers(data.users || []);
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
        console.log("[Permissions modal] Fetched user – freshUser.managerPermissions:", freshUser.managerPermissions, "→ perms:", perms);
        setPermissionsForm(perms);
        setPermissionsModalUser((prev) => (prev?._id === (freshUser._id?.toString?.() || freshUser._id) ? { ...prev, ...freshUser, managerPermissions: perms } : prev));
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
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-extrabold text-gray-900">All Users</h1>
        <p className="text-xs text-gray-500 mt-0.5">Manage users, startups, and company accounts</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Total</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.length}</div>
        </div>
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Admins</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.filter((u) => u.role === "ADMIN").length}</div>
        </div>
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Managers</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.filter((u) => u.role === "MANAGER").length}</div>
        </div>
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Individuals</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.filter((u) => !u.accountType || u.accountType === "individual").length}</div>
        </div>
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-red-600">Startups</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.filter((u) => u.accountType === "startup").length}</div>
        </div>
        <div className="border border-gray-200 p-3 bg-white">
          <div className="text-[10px] font-bold tracking-wider uppercase text-red-600">Companies</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{users.filter((u) => u.accountType === "company").length}</div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-3">
        <select
          id="role-filter"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="h-9 px-3 text-sm border border-gray-300 bg-white text-gray-900 outline-none focus:border-red-500 transition-colors"
        >
          <option value="all">All Users</option>
          <option value="ADMIN">Administrators</option>
          <option value="MANAGER">Managers</option>
          <option value="NORMAL_USER">Regular Users</option>
        </select>
        <span className="text-[11px] text-gray-400">
          Showing {roleFilter === "all" ? users.length : users.filter((u) => u.role === roleFilter).length} of {users.length}
        </span>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Name
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Email
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Account Type
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Role
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Auto-Share
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  Created
                </th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
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
                  <td className="px-3 py-2" onClick={(e) => editingUser === user._id && e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                        className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-red-500"
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        {user.role === "ADMIN" ? (
                          <Shield size={14} className="text-purple-600" />
                        ) : user.role === "MANAGER" ? (
                          <Shield size={14} className="text-amber-600" />
                        ) : (
                          <User size={18} className="text-gray-400" />
                        )}
                        <span className="font-semibold text-gray-900">{user.name}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-3 py-2" onClick={(e) => editingUser === user._id && e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <input
                        type="email"
                        value={editForm.email}
                        onChange={(e) =>
                          setEditForm({ ...editForm, email: e.target.value })
                        }
                        className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-red-500"
                      />
                    ) : (
                      <span className="text-xs text-gray-600">{user.email}</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    <div>
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                          user.accountType === "startup"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : user.accountType === "company"
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.accountType || "individual"}
                      </span>
                      {user.companyName && (
                        <p className="text-[11px] text-gray-500 mt-0.5 truncate max-w-[140px]">{user.companyName}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                    {editingUser === user._id ? (
                      <select
                        value={editForm.role}
                        onChange={(e) =>
                          setEditForm({ ...editForm, role: e.target.value })
                        }
                        className="px-2 py-1 text-xs border border-gray-300 outline-none focus:border-red-500"
                      >
                        <option value="NORMAL_USER">Normal User</option>
                        <option value="MANAGER">Manager</option>
                        <option value="ADMIN">Administrator</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wide ${
                          user.role === "ADMIN"
                            ? "bg-purple-50 text-purple-700 border border-purple-200"
                            : user.role === "MANAGER"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {user.role === "ADMIN" ? "Admin" : user.role === "MANAGER" ? "Manager" : "User"}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
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
                  <td className="px-3 py-2">
                    <span className="text-xs text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex items-center gap-2">
                      {editingUser === user._id ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSave();
                            }}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded transition"
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
                            className="p-1.5 text-gray-600 hover:bg-gray-50 rounded transition"
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
                            className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
                            title="View Details"
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEdit(user);
                            }}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded transition"
                            title="Edit"
                          >
                            <Edit size={14} />
                          </button>
                          {user.role === "MANAGER" && (
                            <button
                              type="button"
                              onClick={(e) => openPermissionsModal(user, e)}
                              className="p-1.5 text-amber-600 hover:bg-amber-50 rounded transition"
                              title="Permissions"
                            >
                              <KeyRound size={14} />
                            </button>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(user._id);
                            }}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
                            title="Delete"
                          >
                            <Trash2 size={14} />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closePermissionsModal}
          role="dialog"
          aria-modal="true"
          aria-label="Manager permissions"
        >
          <div
            className="bg-white border border-gray-200 max-w-md w-full mx-4 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900 mb-0.5">
              Manager Permissions
            </h3>
            <p className="text-[11px] text-gray-400 mb-4">
              {permissionsModalUser.name} — choose accessible sections.
            </p>
            {loadingPermissionsModal ? (
              <div className="py-8 text-center text-gray-400 text-sm">Loading permissions…</div>
            ) : (
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {MANAGER_PERMISSION_OPTIONS.map((opt) => (
                <label
                  key={opt.id}
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={permissionsForm.includes(opt.id)}
                    onChange={() => togglePermission(opt.id)}
                    className="accent-red-600"
                  />
                  <span className="text-sm text-gray-900">{opt.label}</span>
                </label>
              ))}
            </div>
            )}
            <div className="flex gap-2 mt-5 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={savePermissions}
                disabled={savingPermissions}
                className="px-4 py-2 bg-red-600 text-white text-sm font-bold tracking-wide hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {savingPermissions ? "Saving…" : "Save"}
              </button>
              <button
                type="button"
                onClick={closePermissionsModal}
                className="px-4 py-2 border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
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

