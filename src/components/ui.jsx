import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FutureCard({ feature }) {
  return (
    <Link
      to={`/stages/${feature.stage}`}
      className="group card flex flex-col gap-3 hover:border-ca-blue/30"
    >
      <span className="inline-flex w-fit self-start rounded-full bg-ca-yellow/30 px-3 py-1 text-xs font-bold text-slate-800">
        Stage {feature.stage}
      </span>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-ca-blue">{feature.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-ca-blue">
        Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/90 p-6 text-center shadow-soft backdrop-blur">
      <p className="text-3xl font-black text-slate-900 md:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
}

export function PageHeader({ label, title, desc, children }) {
  return (
    <div className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {label && <p className="section-label mb-2">{label}</p>}
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        {desc && <p className="mt-3 max-w-2xl text-lg text-slate-600">{desc}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
