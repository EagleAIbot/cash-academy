import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  CreditCard,
  School,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { formatGBP, SALES_PLANS } from "../config/stripe";
import { ADMIN_STATS } from "../data/curriculum";

const base = import.meta.env.BASE_URL;

export default function SchoolsSales() {
  return (
    <Layout wide>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ca-blue">
        <div className="absolute inset-0 opacity-15">
          <img src={`${base}assets/hero-banner.png`} alt="" className="h-full w-full object-cover" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            <School className="h-3.5 w-3.5" />
            For Primary Schools
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Bring Cash Academy to your school.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Curriculum-aligned financial literacy for Years 3–6. Ready-to-teach lessons,
            downloadable resources, and optional Money Town™ workshops — subscribed and managed
            through Stripe.
          </p>
          <p className="mt-4 text-sm font-semibold text-ca-yellow">
            Trusted by {ADMIN_STATS.activeSchools.toLocaleString()} schools across the UK
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label mb-2 text-center">What your school gets</p>
          <h2 className="mb-10 text-center text-3xl font-black text-slate-900">
            Simple for teachers. Powerful for pupils.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Ready-to-teach curriculum",
                desc: "Full lesson plans, presentations and worksheets for Years 3–6. No prep overwhelm.",
              },
              {
                icon: Users,
                title: "Teacher dashboard",
                desc: "Every teacher gets their own login. Browse, download and deliver lessons in minutes.",
              },
              {
                icon: Sparkles,
                title: "Money Town™ workshops",
                desc: "Optional immersive in-school experience — earn wages, pay tax, budget for real life.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ca-blue-light">
                  <item.icon className="h-7 w-7 text-ca-blue" />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-ca-blue-light py-16" id="pricing">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label mb-2 text-center">Pricing</p>
          <h2 className="mb-3 text-center text-3xl font-black text-slate-900">
            Choose your plan
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-slate-600">
            One-off setup fee of {formatGBP(SALES_PLANS[0].setupFee)} covers onboarding and
            configuration. Then a simple monthly subscription via Stripe — cancel any time.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {SALES_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`card relative flex flex-col ${
                  plan.badge ? "ring-2 ring-ca-yellow shadow-lg" : ""
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ca-yellow px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">
                    {formatGBP(plan.price)}
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  + {formatGBP(plan.setupFee)} one-time setup
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ca-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/checkout?plan=${plan.id}`}
                  className="btn-primary mt-8 inline-flex w-full justify-center"
                >
                  <CreditCard className="h-4 w-4" />
                  Subscribe via Stripe
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-ca-blue" />
              Secure Stripe checkout
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-ca-blue" />
              Invoice & VAT receipt included
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-ca-blue" />
              Cancel any time
            </span>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-5xl font-black text-ca-blue">{ADMIN_STATS.activeSchools}</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">schools already subscribed</p>
          <p className="mt-3 text-slate-600">
            Reaching {ADMIN_STATS.totalPupils.toLocaleString()} pupils with curriculum-aligned
            financial literacy.
          </p>
          <Link to="/admin" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ca-blue hover:underline">
            View admin dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
