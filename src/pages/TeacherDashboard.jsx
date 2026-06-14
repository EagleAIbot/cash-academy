import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Download,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/ui";
import { FUTURE_FEATURES, RECENT_LESSONS, YEARS } from "../data/curriculum";

const base = import.meta.env.BASE_URL;

export default function TeacherDashboard() {
  return (
    <Layout>
      <PageHeader
        label="Teacher Dashboard"
        title="Welcome back, Rebecca"
        desc="Your curriculum, resources and latest content — all in one place."
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search lessons, resources, topics…"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-ca-blue focus:ring-2 focus:ring-ca-blue/20"
          />
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Continue learning */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Continue Teaching</h2>
            <Link to="/curriculum/y3/y3-l3" className="text-sm font-semibold text-ca-blue hover:underline">
              Resume Year 3, Lesson 3 →
            </Link>
          </div>
          <Link
            to="/curriculum/y3/y3-l3"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-ca-blue to-ca-blue-dark p-8 text-white shadow-card md:p-10"
          >
            <div className="relative z-10 max-w-lg">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                Year 3 · Lesson 3
              </span>
              <h3 className="mt-4 text-2xl font-black md:text-3xl">Saving for Something Special</h3>
              <p className="mt-2 text-white/80">
                Children set savings goals and learn why people save money.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-ca-yellow px-5 py-2.5 text-sm font-bold text-slate-900">
                Open Lesson <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <img
              src={`${base}assets/illustration-wallet.png`}
              alt=""
              className="absolute -bottom-4 -right-4 h-40 opacity-30 md:h-52"
              aria-hidden
            />
          </Link>
        </section>

        {/* Year groups — Netflix style */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Curriculum by Year</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {YEARS.map((year) => (
              <Link
                key={year.id}
                to={`/curriculum/${year.id}`}
                className="group card relative overflow-hidden hover:border-ca-blue/40"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-ca-blue/10" />
                <p className="text-xs font-bold uppercase tracking-widest text-ca-blue">
                  {year.label}
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">Ages {year.age}</p>
                <p className="mt-2 text-sm text-slate-600">{year.lessons} lessons</p>
                {!year.ready && (
                  <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                    Preview
                  </span>
                )}
                {year.ready && (
                  <span className="mt-3 inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Available
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Recently added */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Recently Added</h2>
          <div className="space-y-3">
            {RECENT_LESSONS.map((lesson) => (
              <Link
                key={lesson.id}
                to={`/curriculum/y3/${lesson.id}`}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 transition hover:border-ca-blue/30 hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ca-yellow/30">
                  <BookOpen className="h-6 w-6 text-slate-800" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{lesson.title}</p>
                  <p className="text-sm text-slate-500">
                    {lesson.year} · Added {lesson.added}
                  </p>
                </div>
                <Clock className="h-4 w-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section className="mb-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Download, label: "Download Resources", to: "/curriculum/y3" },
            { icon: Star, label: "Money Town™", to: "/money-town" },
            { icon: Sparkles, label: "Future Features", to: "/stages/2" },
          ].map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="card flex items-center gap-4 hover:border-ca-yellow"
            >
              <action.icon className="h-8 w-8 text-ca-blue" />
              <span className="font-semibold text-slate-900">{action.label}</span>
            </Link>
          ))}
        </section>

        {/* Future release cards */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Coming Soon</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE_FEATURES.slice(0, 3).map((f) => (
              <Link
                key={f.id}
                to={`/stages/${f.stage}`}
                className="rounded-xl border border-dashed border-ca-blue/40 bg-ca-blue-light/50 p-5 transition hover:bg-ca-blue-light"
              >
                <span className="text-xs font-bold text-ca-blue">Stage {f.stage}</span>
                <p className="mt-1 font-bold text-slate-900">{f.title}</p>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
