import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { Logo } from "../components/Logo";
import { formatGBP, SALES_PLANS } from "../config/stripe";

export default function Checkout() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const plan = useMemo(() => {
    const id = params.get("plan") || "curriculum";
    return SALES_PLANS.find((p) => p.id === id) ?? SALES_PLANS[0];
  }, [params]);

  const totalToday = plan.setupFee + plan.price;

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      navigate(`/checkout/success?plan=${plan.id}`, { replace: true });
    }, 1400);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto grid min-h-screen max-w-6xl lg:grid-cols-2">
        {/* Order summary — Stripe-style left panel */}
        <div className="flex flex-col justify-between bg-[#0a2540] px-6 py-8 text-white lg:px-12 lg:py-12">
          <div>
            <Link
              to="/schools"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to plans
            </Link>
            <div className="mb-8 flex items-center gap-3">
              <Logo className="h-8 brightness-0 invert" />
              <span className="text-sm font-medium text-white/80">Cash Academy</span>
            </div>
            <p className="text-sm text-white/60">Subscribe to</p>
            <h1 className="mt-1 text-2xl font-bold">{plan.name}</h1>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Monthly subscription</span>
                <span>{formatGBP(plan.price)}/mo</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">One-time setup fee</span>
                <span>{formatGBP(plan.setupFee)}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold">
                <span>Due today</span>
                <span>{formatGBP(totalToday)}</span>
              </div>
              <p className="text-xs text-white/50">
                Then {formatGBP(plan.price)}/month from next billing date. Cancel any time.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-2 text-xs text-white/40">
            <ShieldCheck className="h-4 w-4" />
            Powered by Stripe · Demo checkout
          </div>
        </div>

        {/* Payment form */}
        <div className="flex items-center justify-center px-6 py-10 lg:px-12">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h2 className="mb-6 text-xl font-bold text-slate-900">School details</h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  School name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Oakwood Primary School"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Contact email
                </label>
                <input
                  required
                  type="email"
                  placeholder="finance@schoolname.co.uk"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Number of pupils
                </label>
                <input
                  required
                  type="number"
                  min="50"
                  placeholder="420"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                />
              </div>

              <div className="border-t border-slate-200 pt-4">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Card number
                </label>
                <input
                  required
                  type="text"
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="MM / YY"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                  />
                  <input
                    required
                    type="text"
                    placeholder="CVC"
                    className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-[#635bff] focus:ring-2 focus:ring-[#635bff]/20"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#635bff] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#5851ea] disabled:opacity-70"
            >
              {loading ? (
                "Processing…"
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Pay {formatGBP(totalToday)}
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              Demo checkout — no payment is processed. In production this routes to Stripe.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
