import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  CreditCard,
  FileUp,
  LayoutDashboard,
  School,
  Upload,
  Users,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/ui";
import { ADMIN_SCHOOLS } from "../data/curriculum";

const TABS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "schools", label: "Schools", icon: School },
  { id: "subscriptions", label: "Subscriptions", icon: CreditCard },
  { id: "content", label: "Content", icon: Upload },
];

export default function Admin() {
  const [tab, setTab] = useState("overview");

  return (
    <Layout>
      <PageHeader
        label="Admin"
        title="Cash Academy Admin"
        desc="Manage schools, subscriptions, curriculum and content — simple and non-technical."
      />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                tab === t.id
                  ? "bg-ca-blue text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Active Schools", value: "4", icon: Building2 },
                { label: "Total Pupils", value: "1,555", icon: Users },
                { label: "Monthly Revenue", value: "£396", icon: CreditCard },
                { label: "Lessons Published", value: "3", icon: FileUp },
              ].map((stat) => (
                <div key={stat.label} className="card">
                  <stat.icon className="mb-3 h-6 w-6 text-ca-blue" />
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card">
                <h3 className="mb-4 font-bold text-slate-900">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    "Upload new lesson",
                    "Add a school",
                    "Manage subscription",
                    "View activity log",
                  ].map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 transition hover:border-ca-blue/30 hover:bg-white"
                    >
                      {action}
                      <span className="text-ca-blue">→</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="mb-4 font-bold text-slate-900">Recent Activity</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { action: "Oakwood Primary accessed Year 3, Lesson 3", time: "2 hours ago" },
                    { action: "New school trial started — Greenfield Primary", time: "1 day ago" },
                    { action: "Lesson 'Saving for Something Special' downloaded 12 times", time: "2 days ago" },
                    { action: "Money Town™ enquiry from St Mary's CofE", time: "3 days ago" },
                  ].map((item) => (
                    <div key={item.action} className="flex justify-between gap-4 border-b border-slate-50 pb-3">
                      <span className="text-slate-700">{item.action}</span>
                      <span className="shrink-0 text-slate-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "schools" && (
          <div className="card overflow-hidden !p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left">
                  <th className="px-6 py-4 font-semibold text-slate-700">School</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Pupils</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Plan</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Since</th>
                </tr>
              </thead>
              <tbody>
                {ADMIN_SCHOOLS.map((school) => (
                  <tr key={school.name} className="border-b border-slate-50 hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">{school.name}</td>
                    <td className="px-6 py-4 text-slate-600">{school.pupils}</td>
                    <td className="px-6 py-4 text-slate-600">{school.plan}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          school.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {school.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{school.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "subscriptions" && (
          <div className="space-y-4">
            {ADMIN_SCHOOLS.filter((s) => s.status === "Active").map((school) => (
              <div key={school.name} className="card flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{school.name}</p>
                  <p className="text-sm text-slate-600">{school.plan}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-slate-900">£99/mo</p>
                  <p className="text-xs text-emerald-600">Active · Renews 1 Jul 2026</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "content" && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="mb-4 font-bold text-slate-900">Upload Curriculum</h3>
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-ca-blue/30 bg-ca-blue-light/30 px-6 py-12">
                <Upload className="mb-3 h-10 w-10 text-ca-blue" />
                <p className="text-sm font-medium text-slate-700">
                  Drag & drop lesson files here
                </p>
                <p className="mt-1 text-xs text-slate-500">PPTX, PDF, worksheets</p>
                <button type="button" className="btn-primary mt-4 !text-xs">
                  Browse Files
                </button>
              </div>
            </div>
            <div className="card">
              <h3 className="mb-4 font-bold text-slate-900">Published Content</h3>
              <div className="space-y-3">
                {[
                  "Year 3 — Lesson 1: What is Money?",
                  "Year 3 — Lesson 2: Needs vs Wants",
                  "Year 3 — Lesson 3: Saving for Something Special",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-800">{item}</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl bg-ca-blue-light p-6 text-center">
          <p className="text-sm text-slate-600">
            This admin panel is part of Stage 1 — designed so Becky can run Cash Academy
            herself without technical support.
          </p>
          <Link to="/stages/1" className="mt-3 inline-block text-sm font-bold text-ca-blue hover:underline">
            View Stage 1 details →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
