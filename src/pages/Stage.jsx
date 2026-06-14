import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "../components/Layout";
import { STAGES, getStage } from "../data/curriculum";

export default function StagePage() {
  const { stageId } = useParams();
  const stage = getStage(stageId) || STAGES[0];
  const isLive = stage.status === "live";

  return (
    <Layout>
      <section
        className={`py-16 md:py-20 ${
          isLive
            ? "bg-gradient-to-br from-ca-blue to-ca-blue-dark text-white"
            : "bg-gradient-to-br from-ca-yellow/80 to-ca-yellow text-slate-900"
        }`}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/"
            className={`mb-6 inline-flex items-center gap-1 text-sm font-medium ${
              isLive ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <p
            className={`text-xs font-bold uppercase tracking-widest ${
              isLive ? "text-white/70" : "text-slate-700/70"
            }`}
          >
            Stage {stage.id}
            {isLive ? " — Live Demo" : " — Future Preview"}
          </p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">{stage.name}</h1>
          <p className={`mt-4 text-lg ${isLive ? "text-white/90" : "text-slate-800"}`}>
            {stage.tagline}
          </p>
          {isLive && stage.investment && (
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="rounded-2xl bg-white/20 px-8 py-4 backdrop-blur">
                <p className="text-xs font-bold uppercase text-white/70">Investment</p>
                <p className="text-3xl font-black">{stage.investment}</p>
              </div>
              <div className="rounded-2xl bg-white/20 px-8 py-4 backdrop-blur">
                <p className="text-xs font-bold uppercase text-white/70">Support</p>
                <p className="text-3xl font-black">{stage.support}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-black text-slate-900">
          {isLive ? "What's Included" : "What's Coming"}
        </h2>
        <div className="space-y-3">
          {stage.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ca-blue" />
              <span className="text-slate-800">{feature}</span>
            </div>
          ))}
        </div>

        {isLive && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link to="/dashboard" className="card group hover:border-ca-blue">
              <h3 className="font-bold text-slate-900 group-hover:text-ca-blue">
                Teacher Dashboard
              </h3>
              <p className="mt-1 text-sm text-slate-600">Explore the live demo →</p>
            </Link>
            <Link to="/admin" className="card group hover:border-ca-blue">
              <h3 className="font-bold text-slate-900 group-hover:text-ca-blue">Admin Panel</h3>
              <p className="mt-1 text-sm text-slate-600">See how Becky runs it →</p>
            </Link>
          </div>
        )}

        {!isLive && (
          <div className="mt-10 rounded-2xl border border-dashed border-ca-blue/30 bg-ca-blue-light/50 p-8 text-center">
            <p className="text-lg font-bold text-slate-900">Future Product Preview</p>
            <p className="mt-2 text-slate-600">
              This stage builds on Stage 1 and shows where Cash Academy is heading.
            </p>
          </div>
        )}

        {/* Stage navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
          {stage.id > 1 ? (
            <Link
              to={`/stages/${STAGES[stage.id - 2].slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ca-blue hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Stage {stage.id - 1}
            </Link>
          ) : (
            <span />
          )}
          {stage.id < 5 ? (
            <Link
              to={`/stages/${STAGES[stage.id].slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ca-blue hover:underline"
            >
              Stage {stage.id + 1} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          )}
        </div>
      </div>

      {/* All stages overview */}
      <section className="border-t border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-center text-xl font-black text-slate-900">Full Roadmap</h2>
          <div className="space-y-3">
            {STAGES.map((s) => (
              <Link
                key={s.id}
                to={`/stages/${s.slug}`}
                className={`flex items-center justify-between rounded-xl px-5 py-4 transition ${
                  s.id === stage.id
                    ? "bg-ca-blue text-white"
                    : "bg-white text-slate-800 hover:bg-ca-blue-light"
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Stage {s.id}
                  </span>
                  <p className="font-bold">{s.name}</p>
                </div>
                <span className="text-sm font-medium opacity-80">
                  {s.status === "live" ? "Live Demo" : "Preview"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
