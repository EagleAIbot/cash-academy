import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, Target, TrendingUp, Zap } from "lucide-react";
import { Layout } from "../components/Layout";
import { ROADMAP_CLOSING, STAGES } from "../data/curriculum";

function StageCard({ stage }) {
  const isLive = stage.status === "live";

  return (
    <article
      id={`stage-${stage.id}`}
      className={`scroll-mt-24 overflow-hidden rounded-2xl border bg-white shadow-soft ${
        isLive ? "border-ca-blue ring-2 ring-ca-blue/20" : "border-slate-200"
      }`}
    >
      {/* Header */}
      <div
        className={`px-6 py-5 md:px-8 ${
          isLive
            ? "bg-gradient-to-r from-ca-blue to-ca-blue-dark text-white"
            : "border-b border-slate-100 bg-slate-50"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p
              className={`text-xs font-bold uppercase tracking-widest ${
                isLive ? "text-white/70" : "text-slate-500"
              }`}
            >
              Stage {stage.id}
            </p>
            <h2 className={`mt-1 text-2xl font-black md:text-3xl ${isLive ? "text-white" : "text-slate-900"}`}>
              {stage.name}
            </h2>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
              isLive ? "bg-ca-yellow text-slate-900" : "bg-slate-200 text-slate-600"
            }`}
          >
            {stage.badge}
          </span>
        </div>
        <p className={`mt-1 text-sm font-medium ${isLive ? "text-white/80" : "text-slate-500"}`}>
          {stage.statusLabel}
        </p>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-8">
        {/* Story */}
        <div>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-ca-blue">Outcome</p>
            <p className="mt-2 text-lg font-semibold leading-relaxed text-slate-900">{stage.outcome}</p>
          </div>

          {stage.purpose ? (
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Purpose</p>
              <p className="mt-2 text-slate-700">{stage.purpose}</p>
            </div>
          ) : null}

          <div className="mb-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              {isLive ? "Includes" : "Key Features"}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {stage.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ca-blue" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {stage.automations ? (
            <div className="mb-6 rounded-xl bg-ca-blue-light/50 p-5">
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ca-blue">
                <Zap className="h-4 w-4" />
                Automations Included
              </p>
              <ul className="space-y-2">
                {stage.automations.map((a) => (
                  <li key={a.trigger} className="text-sm text-slate-700">
                    <span className="font-medium">{a.trigger}</span>
                    <span className="text-slate-400"> → </span>
                    <span>{a.action}</span>
                  </li>
                ))}
              </ul>
              {stage.automationNote ? (
                <p className="mt-4 border-t border-ca-blue/20 pt-4 text-xs leading-relaxed text-slate-600">
                  {stage.automationNote}
                </p>
              ) : null}
            </div>
          ) : null}

          {isLive ? (
            <div className="flex flex-wrap gap-3">
              <Link to="/dashboard" className="btn-outline !text-xs">
                Teacher Dashboard
              </Link>
              <Link to="/admin" className="btn-outline !text-xs">
                Admin Panel
              </Link>
              <Link to="/schools" className="btn-primary !text-xs">
                School Sales Page
              </Link>
            </div>
          ) : null}
        </div>

        {/* Metrics sidebar */}
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase text-slate-500">Investment</p>
            <p className="mt-1 text-2xl font-black text-slate-900">{stage.investment}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase text-slate-500">Monthly Support</p>
            <p className="mt-1 text-2xl font-black text-slate-900">{stage.support}</p>
          </div>
          {stage.successMilestone ? (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase text-emerald-700">
                <Target className="h-3.5 w-3.5" />
                Success Milestone
              </p>
              <p className="mt-1 text-sm font-semibold text-emerald-900">{stage.successMilestone}</p>
            </div>
          ) : null}
          {stage.implementAfter ? (
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
              <p className="text-xs font-bold uppercase text-amber-700">Implement After</p>
              <p className="mt-1 text-sm font-semibold text-amber-900">{stage.implementAfter}</p>
            </div>
          ) : null}
          <div className="rounded-xl border border-ca-blue/20 bg-ca-blue-light/40 p-4">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase text-ca-blue">
              <TrendingUp className="h-3.5 w-3.5" />
              {stage.revenueTargetLabel}
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">{stage.revenueTarget}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Roadmap() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <Layout wide>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="section-label mb-3">Product Roadmap</p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Cash Academy Growth Roadmap
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            A strategic path from launch to national scale. Each stage unlocks the next — funded by
            the success of the one before it.
          </p>
        </div>
      </section>

      {/* Stage cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl space-y-10 px-4">
          {STAGES.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </section>

      {/* Closing message */}
      <section className="border-t border-slate-100 bg-ca-blue-light py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-lg font-semibold leading-relaxed text-slate-800 md:text-xl">
            {ROADMAP_CLOSING}
          </p>
          <Link to="/schools" className="btn-primary mt-8 inline-flex">
            Start with Stage 1 — Subscribe a School <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
