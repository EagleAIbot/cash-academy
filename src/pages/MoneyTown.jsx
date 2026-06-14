import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { Layout } from "../components/Layout";
import { PageHeader } from "../components/ui";
import { MONEY_TOWN_TOPICS } from "../data/curriculum";

const base = import.meta.env.BASE_URL;

export default function MoneyTown() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    school: "",
    contact: "",
    email: "",
    pupils: "",
    date: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ca-yellow via-ca-yellow to-ca-yellow-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-800/70">
            Flagship Experience
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-900 md:text-5xl">
            Money Town™
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-800">
            We transform your school hall into an immersive pop-up town — complete with a
            bank, shop, estate agents and more. Children step into real-world roles, earn
            wages, pay tax, and make spending decisions through hands-on role play.
          </p>
          <a href="#enquire" className="btn-primary mt-8 inline-flex">
            Book a Workshop <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <img
          src={`${base}assets/illustration-cards.png`}
          alt=""
          className="absolute -bottom-8 right-8 hidden h-48 opacity-40 md:block lg:h-64"
          aria-hidden
        />
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-black text-slate-900">
            How Money Town™ Works
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Pick a Date", desc: "Tell us your preferred day and year groups." },
              { step: "02", title: "Money Town Arrives", desc: "We set up banks, shops, and role-play stations in your hall." },
              { step: "03", title: "Role Play in Action", desc: "Children earn wages, pay tax, budget, and make real choices." },
              { step: "04", title: "Lasting Impact", desc: "Children leave with confidence, awareness, and independence." },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <span className="text-3xl font-black text-ca-blue">{item.step}</span>
                <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-ca-blue-light py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-black text-slate-900">Topics Covered</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {MONEY_TOWN_TOPICS.map((topic) => (
              <div
                key={topic}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-ca-blue" />
                <span className="text-sm font-medium text-slate-800">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-black text-slate-900">Why Schools Love It</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Users, title: "Hands-On Learning", desc: "Not worksheets — real role play that children remember for years." },
              { icon: Building2, title: "Fully Resourced", desc: "We bring everything. Your hall becomes Money Town for the day." },
              { icon: Sparkles, title: "Curriculum Aligned", desc: "Links directly to the Cash Academy digital curriculum." },
            ].map((b) => (
              <div key={b.title} className="card">
                <b.icon className="mb-4 h-8 w-8 text-ca-blue" />
                <h3 className="font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories placeholder */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-black text-slate-900">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { school: "Oakwood Primary", quote: "The children were absolutely buzzing. They talked about Money Town for weeks afterwards.", author: "Year 4 Teacher" },
              { school: "St Mary's CofE", quote: "Best workshop we've ever had in school. Rebecca is brilliant with the children.", author: "Deputy Head" },
            ].map((story) => (
              <div key={story.school} className="card">
                <p className="text-lg italic leading-relaxed text-slate-700">"{story.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{story.author}</p>
                <p className="text-sm text-slate-500">{story.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-2 text-2xl font-black text-slate-900">Book Money Town™</h2>
          <p className="mb-8 text-slate-600">
            Fill in the form and Rebecca will be in touch within 24 hours.
          </p>
          {submitted ? (
            <div className="card border-emerald-200 bg-emerald-50 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Enquiry Sent!</h3>
              <p className="mt-2 text-slate-600">
                Rebecca will be in touch within 24 hours to arrange your Money Town™ day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "school", label: "School Name", type: "text" },
                { key: "contact", label: "Contact Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "pupils", label: "Number of Pupils", type: "text" },
                { key: "date", label: "Preferred Date", type: "date" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required={field.key !== "date"}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-ca-blue focus:ring-2 focus:ring-ca-blue/20"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-ca-blue focus:ring-2 focus:ring-ca-blue/20"
                  placeholder="Any specific requirements or questions…"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Link to curriculum */}
      <section className="border-t border-slate-100 bg-ca-blue py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-white/80">
            Money Town™ pairs perfectly with the digital curriculum.
          </p>
          <Link to="/curriculum/y3" className="btn-primary mt-4 inline-flex">
            Explore Curriculum <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
