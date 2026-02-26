"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  Shield,
  User,
  Mail,
  Calendar,
  ToggleLeft,
  ToggleRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  Building2,
  Phone,
  Globe,
  MapPin,
  Users as UsersIcon,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export default function UserDetailPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.userId;

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`/api/superadmin/users/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setPosts(data.posts || []);
      } else {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        console.error("Failed to load user details:", errorData);
        alert(errorData.error || "Failed to load user details");
        router.push("/admin/users");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      alert("Failed to load user details. Please try again.");
      router.push("/admin/users");
    } finally {
      setLoading(false);
    }
  };

  const toggleSocialMedia = async (platform) => {
    if (!user) return;

    setSaving(true);
    const currentSettings = user.socialMediaSettings || {};
    const newSettings = {
      ...currentSettings,
      [platform]: !currentSettings[platform],
    };

    try {
      const response = await fetch(`/api/superadmin/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ socialMediaSettings: newSettings }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        alert("Failed to update social media settings");
      }
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update social media settings");
    } finally {
      setSaving(false);
    }
  };

  const toggleAutoShare = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const response = await fetch(`/api/superadmin/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ autoShareEnabled: !user.autoShareEnabled }),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        alert("Failed to update auto-share setting");
      }
    } catch (error) {
      console.error("Error updating auto-share:", error);
      alert("Failed to update auto-share setting");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">User not found</p>
        <button
          onClick={() => router.push("/admin/users")}
          className="mt-4 text-red-600 hover:underline text-sm font-medium"
        >
          Back to Users
        </button>
      </div>
    );
  }

  const socialMediaSettings = user.socialMediaSettings || {};
  const socialPlatforms = [
    { key: "facebook", name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { key: "twitter", name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { key: "instagram", name: "Instagram", icon: Instagram, color: "text-pink-600" },
    { key: "linkedin", name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
    { key: "youtube", name: "YouTube", icon: Youtube, color: "text-red-600" },
  ];

  const isOrg = user.accountType === "startup" || user.accountType === "company";

  const InfoItem = ({ icon: Icon, label, value }) => {
    if (!value) return null;
    return (
      <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
        <Icon size={15} className="text-gray-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400">{label}</p>
          <p className="text-sm text-gray-900 mt-0.5">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.push("/admin/users")}
          className="p-1.5 text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-400 transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-xl font-extrabold text-gray-900">User Details</h1>
          <p className="text-[11px] text-gray-400 mt-0.5">View and manage user information</p>
        </div>
      </div>

      {/* User Info Card */}
      <div className="bg-white border border-gray-200 p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-600 flex items-center justify-center shrink-0">
            {isOrg ? (
              <Building2 size={22} className="text-white" />
            ) : user.role === "ADMIN" || user.role === "MANAGER" ? (
              <Shield size={22} className="text-white" />
            ) : (
              <User size={22} className="text-white" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-extrabold text-gray-900">
                {isOrg ? (user.companyName || user.name) : user.name}
              </h2>
              <span
                className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                  user.role === "ADMIN"
                    ? "bg-purple-50 text-purple-700 border border-purple-200"
                    : user.role === "MANAGER"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                {user.role === "ADMIN" ? "Admin" : user.role === "MANAGER" ? "Manager" : "User"}
              </span>
              <span
                className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                  user.accountType === "startup"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : user.accountType === "company"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {user.accountType || "individual"}
              </span>
            </div>

            {/* Individual — show personal info inline */}
            {!isOrg && (
              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="text-gray-400" />
                  <span>{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} className="text-gray-400" />
                    <span>{user.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={14} className="text-gray-400" />
                  <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            )}

            {/* Org — show industry + city subtitle */}
            {isOrg && (
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                {user.industry && <span>{user.industry}</span>}
                {user.industry && user.city && <span className="w-1 h-1 bg-gray-300 rounded-full" />}
                {user.city && <span>{user.city}</span>}
                {(user.industry || user.city) && <span className="w-1 h-1 bg-gray-300 rounded-full" />}
                <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Organisation Details — only for startup/company */}
      {isOrg && (
        <div className="bg-white p-5">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={16} className="text-red-600" />
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900">
              {user.accountType === "startup" ? "Startup" : "Company"} Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <InfoItem
                icon={Building2}
                label={user.accountType === "startup" ? "Startup Name" : "Company Name"}
                value={user.companyName}
              />
              <InfoItem icon={Briefcase} label="Industry" value={user.industry} />
              <InfoItem icon={MapPin} label="City" value={user.city} />
              <InfoItem icon={Calendar} label="Founded Year" value={user.foundedYear} />
            </div>
            <div>
              <InfoItem icon={UsersIcon} label="Team Size" value={user.teamSize} />
              <InfoItem icon={Phone} label="Phone" value={user.phone} />
              <InfoItem
                icon={Globe}
                label="Website"
                value={
                  user.website ? (
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  ) : null
                }
              />
              <InfoItem icon={Mail} label="Business Email" value={user.email} />
            </div>
          </div>

          {user.description && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-1">
                About
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{user.description}</p>
            </div>
          )}
        </div>
      )}

      {/* Auto-Share Toggle */}
      <div className="bg-white border border-gray-200 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900">
              Auto-Share Content
            </h3>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Automatically share user&apos;s posts to social media
            </p>
          </div>
          <button
            onClick={toggleAutoShare}
            disabled={saving}
            className="flex items-center gap-2"
          >
            {user.autoShareEnabled ? (
              <>
                <ToggleRight size={28} className="text-green-600" />
                <span className="text-xs font-bold text-green-600">ON</span>
              </>
            ) : (
              <>
                <ToggleLeft size={28} className="text-gray-300" />
                <span className="text-xs font-bold text-gray-400">OFF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Social Media Settings */}
      <div className="bg-white border border-gray-200 p-5">
        <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900 mb-1">
          Social Media Auto-Sharing
        </h3>
        <p className="text-[11px] text-gray-400 mb-4">
          Select platforms for automatic posting
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            const isEnabled = socialMediaSettings[platform.key] || false;

            return (
              <div
                key={platform.key}
                className={`border p-3 transition-colors ${
                  isEnabled ? "border-green-400 bg-green-50/50" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon size={18} className={platform.color} />
                    <span className="text-sm font-semibold text-gray-900">{platform.name}</span>
                  </div>
                  <button
                    onClick={() => toggleSocialMedia(platform.key)}
                    disabled={saving || !user.autoShareEnabled}
                    title={!user.autoShareEnabled ? "Enable auto-share first" : ""}
                  >
                    {isEnabled ? (
                      <ToggleRight size={22} className="text-green-600" />
                    ) : (
                      <ToggleLeft size={22} className="text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {!user.autoShareEnabled && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
            Auto-share must be enabled before configuring individual platforms.
          </div>
        )}
      </div>

      {/* User Posts */}
      <div className="bg-white border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900 flex items-center gap-2">
            <FileText size={16} />
            User Posts ({posts.length})
          </h3>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <FileText size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">No posts yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Title
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Category
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Status
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Auto-Share
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr key={post._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-3 py-2.5">
                      <span className="text-sm font-semibold text-gray-900">{post.title}</span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-gray-100 text-gray-600">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                          post.status === "published"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      {post.autoShareEnabled ? (
                        <span className="text-green-600 text-[11px] font-bold">Enabled</span>
                      ) : (
                        <span className="text-gray-300 text-[11px]">Disabled</span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-[11px] text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
