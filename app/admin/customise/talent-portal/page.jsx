"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Save,
  Edit2,
  Trash2,
  MapPin,
  Briefcase,
  ExternalLink,
  X,
} from "lucide-react";

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship", "Remote", "Freelance"];

const emptyJob = {
  title: "",
  company: "",
  location: "",
  type: "Full-time",
  industry: "",
  description: "",
  requirements: "",
  applyUrl: "",
  applyEmail: "",
  salary: "",
  experience: "",
  enabled: true,
};

export default function TalentPortalCustomise() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ ...emptyJob });

  const loadJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/jobs", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setList(data.list || []);
      }
    } catch (err) {
      console.error("Error loading jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const resetForm = () => {
    setForm({ ...emptyJob });
    setEditingId(null);
    setShowForm(false);
  };

  const handleAdd = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (job) => {
    setForm({
      title: job.title || "",
      company: job.company || "",
      location: job.location || "",
      type: job.type || "Full-time",
      industry: job.industry || "",
      description: job.description || "",
      requirements: job.requirements || "",
      applyUrl: job.applyUrl || "",
      applyEmail: job.applyEmail || "",
      salary: job.salary || "",
      experience: job.experience || "",
      enabled: job.enabled !== false,
    });
    setEditingId(job._id);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title?.trim() || !form.company?.trim()) {
      alert("Title and company are required.");
      return;
    }
    setSaving(true);
    try {
      const url = editingId ? `/api/admin/jobs/${editingId}` : "/api/admin/jobs";
      const method = editingId ? "PUT" : "POST";
      const body = JSON.stringify(form);
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert(data.error || "Failed to save job");
        return;
      }
      resetForm();
      loadJobs();
    } catch (err) {
      alert("Failed to save job");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this job listing?")) return;
    try {
      const res = await fetch(`/api/admin/jobs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        loadJobs();
        if (editingId === id) resetForm();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete");
      }
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading jobs...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Talent Portal (Jobs)</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Add and manage job listings shown on the Talent Portal.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded"
        >
          <Plus size={16} />
          Add Job
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white">
              {editingId ? "Edit Job" : "Add New Job"}
            </h2>
            <button
              type="button"
              onClick={resetForm}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => updateForm("title", e.target.value)}
                  placeholder="e.g. Senior Software Engineer"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => updateForm("company", e.target.value)}
                  placeholder="Company name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  placeholder="e.g. Mumbai, Remote"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => updateForm("type", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                >
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Industry
                </label>
                <input
                  type="text"
                  value={form.industry}
                  onChange={(e) => updateForm("industry", e.target.value)}
                  placeholder="e.g. Fintech, SaaS"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Salary (optional)
                </label>
                <input
                  type="text"
                  value={form.salary}
                  onChange={(e) => updateForm("salary", e.target.value)}
                  placeholder="e.g. 15-25 LPA"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Experience
              </label>
              <input
                type="text"
                value={form.experience}
                onChange={(e) => updateForm("experience", e.target.value)}
                placeholder="e.g. 3-5 years"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                value={form.description}
                onChange={(e) => updateForm("description", e.target.value)}
                placeholder="Job description"
                rows={4}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Requirements
              </label>
              <textarea
                value={form.requirements}
                onChange={(e) => updateForm("requirements", e.target.value)}
                placeholder="Key requirements"
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Apply URL
                </label>
                <input
                  type="url"
                  value={form.applyUrl}
                  onChange={(e) => updateForm("applyUrl", e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Apply Email
                </label>
                <input
                  type="email"
                  value={form.applyEmail}
                  onChange={(e) => updateForm("applyEmail", e.target.value)}
                  placeholder="jobs@company.com"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                />
                <p className="text-[11px] text-gray-500 mt-1">Used if Apply URL is empty</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="enabled"
                checked={form.enabled}
                onChange={(e) => updateForm("enabled", e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded"
              />
              <label htmlFor="enabled" className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Visible on Talent Portal
              </label>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-bold rounded"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            Job Listings ({list.length})
          </h3>
        </div>
        {list.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            No jobs yet. Click &quot;Add Job&quot; to create your first listing.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {list.map((job) => (
              <li
                key={job._id}
                className="flex items-start justify-between gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h4>
                    {!job.enabled && (
                      <span className="text-[10px] px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-gray-500">
                        <MapPin size={10} />
                        {job.location}
                      </span>
                    )}
                    {job.type && (
                      <span className="text-[11px] px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded">
                        {job.type}
                      </span>
                    )}
                    {job.industry && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-gray-500">
                        <Briefcase size={10} />
                        {job.industry}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/tools/talent-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400"
                    title="View on site"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleEdit(job)}
                    className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                    title="Edit"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(job._id)}
                    className="p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
