"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Calendar,
  Building2,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  Users as UsersIcon,
  Shield,
} from "lucide-react";

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const isOrg = user.accountType === "startup" || user.accountType === "company";
  const accountLabel = user.accountType === "startup"
    ? "Startup"
    : user.accountType === "company"
    ? "Company"
    : "Individual";

  const InfoRow = ({ icon: Icon, label, value }) => {
    if (!value) return null;
    return (
      <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
        <Icon size={15} className="text-gray-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400">{label}</p>
          <p className="text-sm text-gray-900 mt-0.5">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div>
        <h1 className="text-xl font-extrabold text-gray-900">My Profile</h1>
        <p className="text-xs text-gray-400 mt-0.5">Your account information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-gray-200 p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-600 flex items-center justify-center shrink-0">
            <span className="text-white text-lg font-bold">
              {user.name?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-extrabold text-gray-900">{user.name}</h2>
              <span
                className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                  user.accountType === "startup"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : user.accountType === "company"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {accountLabel}
              </span>
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
            </div>
            <p className="text-sm text-gray-500 mt-1">{user.email}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Joined {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Individual — Personal Info */}
      {!isOrg && (
        <div className="bg-white border border-gray-200 p-5">
          <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900 mb-3">
            Personal Information
          </h3>
          <InfoRow icon={User} label="Full Name" value={user.name} />
          <InfoRow icon={Mail} label="Email Address" value={user.email} />
          <InfoRow icon={Phone} label="Phone" value={user.phone} />
          <InfoRow
            icon={Calendar}
            label="Member Since"
            value={new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        </div>
      )}

      {/* Startup / Company — Organisation Details */}
      {isOrg && (
        <div className="bg-white p-5">
          <div className="flex items-center gap-2 mb-3">
            <Building2 size={16} className="text-red-600" />
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900">
              {user.accountType === "startup" ? "Startup" : "Company"} Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <InfoRow
                icon={Building2}
                label={user.accountType === "startup" ? "Startup Name" : "Company Name"}
                value={user.companyName}
              />
              <InfoRow icon={Briefcase} label="Industry" value={user.industry} />
              <InfoRow icon={MapPin} label="City" value={user.city} />
              <InfoRow icon={Calendar} label="Founded Year" value={user.foundedYear} />
            </div>
            <div>
              <InfoRow icon={UsersIcon} label="Team Size" value={user.teamSize} />
              <InfoRow icon={Phone} label="Phone" value={user.phone} />
              <InfoRow
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
              <InfoRow icon={Mail} label="Business Email" value={user.email} />
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
    </div>
  );
}
