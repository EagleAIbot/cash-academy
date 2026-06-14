import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Building2, Sparkles, Target, Users } from "lucide-react";
import { Layout } from "../components/Layout";
import { FutureCard, StatCard } from "../components/ui";
import { BRAND_VALUES, FUTURE_FEATURES, IMPACT_STATS } from "../data/curriculum";

const base = import.meta.env.BASE_URL;

const VALUE_ICONS = {
  coins: BookOpen,
  wallet: Target,
  growth: Sparkles,
  school: Building2,
};

export default function Landing() {
  return (
    <Layout wide>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ca-blue">
        <div className="absolute inset-0 opacity-20">
          <img
            src={`${base}assets/hero-banner.png`}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Financial Literacy Platform
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              SMART MONEY.
              <br />
              START YOUNG.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">
              Preparing children for the real world through engaging financial literacy
              experiences and curriculum resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/curriculum" className="btn-primary">
                Explore Curriculum <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/money-town" className="btn-secondary">
                Book Money Town™
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={`${base}assets/illustration-wallet.png`}
              alt="Wallet with money"
              className="max-h-72 w-auto drop-shadow-2xl md:max-h-96"
            />
            <img
              src={`${base}assets/illustration-cards.png`}
              alt=""
              className="absolute -bottom-4 -left-4 h-32 w-auto opacity-90 md:h-40"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-ca-blue-light py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          {IMPACT_STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="section-label mb-3">Our Mission</p>
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
            Helping children build confidence with money, understand the world around them
            and prepare for their future.
          </h2>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label mb-2 text-center">What We Stand For</p>
          <h2 className="mb-10 text-center text-3xl font-black text-slate-900">
            Built for teachers. Loved by children.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_VALUES.map((v) => {
              const Icon = VALUE_ICONS[v.icon] || BookOpen;
              return (
                <div key={v.title} className="card text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-ca-blue-light">
                    <Icon className="h-7 w-7 text-ca-blue" />
                  </div>
                  <h3 className="font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Money Town CTA */}
      <section className="bg-ca-yellow py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-800/70">
              Flagship Experience
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Money Town™
            </h2>
            <p className="mt-4 text-lg text-slate-800">
              An immersive pop-up role play experience where children earn wages, pay tax,
              budget for essentials, and make real spending decisions — all in your school hall.
            </p>
            <Link to="/money-town" className="btn-primary mt-6 inline-flex">
              Explore Money Town™ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={`${base}assets/illustration-growth.png`}
            alt="Growth and learning"
            className="h-48 w-auto md:h-56"
          />
        </div>
      </section>

      {/* Platform preview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label mb-2">Live Demo</p>
          <h2 className="mb-8 text-3xl font-black text-slate-900">
            Explore the platform
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: "/dashboard", title: "Teacher Dashboard", desc: "Netflix meets Notion" },
              { to: "/curriculum/y3", title: "Curriculum", desc: "Year 3–6 lessons" },
              { to: "/money-town", title: "Money Town™", desc: "Workshop booking" },
              { to: "/admin", title: "Admin Panel", desc: "Run it yourself" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="card group hover:border-ca-yellow">
                <h3 className="font-bold text-slate-900 group-hover:text-ca-blue">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ca-blue">
                  Open <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Future vision */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="section-label mb-2">Future Vision</p>
          <h2 className="mb-2 text-3xl font-black text-slate-900">What's coming next</h2>
          <p className="mb-8 max-w-2xl text-slate-600">
            Stage 1 launches the curriculum platform. These future releases show where Cash
            Academy is heading.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE_FEATURES.map((f) => (
              <FutureCard key={f.id} feature={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Stage 1 CTA */}
      <section className="border-t border-slate-100 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="section-label mb-2">Stage 1 — Live Demo</p>
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
            Cash Academy Digital
          </h2>
          <p className="mt-4 text-slate-600">
            Launch curriculum subscriptions. Everything you see in this demo is Stage 1.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="rounded-2xl bg-ca-blue-light px-8 py-4">
              <p className="text-xs font-bold uppercase text-ca-blue">Investment</p>
              <p className="text-2xl font-black text-slate-900">£1,999</p>
            </div>
            <div className="rounded-2xl bg-ca-yellow/30 px-8 py-4">
              <p className="text-xs font-bold uppercase text-slate-700">Support</p>
              <p className="text-2xl font-black text-slate-900">£99/month</p>
            </div>
          </div>
          <Link to="/stages/1" className="btn-primary mt-8 inline-flex">
            View Full Roadmap <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
