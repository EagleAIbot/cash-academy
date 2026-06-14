import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Layout } from "../components/Layout";
import { SALES_PLANS } from "../config/stripe";

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const planId = params.get("plan") || "curriculum";
  const plan = SALES_PLANS.find((p) => p.id === planId) ?? SALES_PLANS[0];

  return (
    <Layout>
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-9 w-9 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-900">You&apos;re subscribed!</h1>
        <p className="mt-4 text-slate-600">
          Welcome to Cash Academy <strong>{plan.name}</strong>. Becky and the team will be in
          touch within 24 hours to set up your school accounts and schedule onboarding.
        </p>
        <div className="card mt-8 text-left text-sm">
          <p className="font-bold text-slate-900">What happens next</p>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-slate-600">
            <li>Confirmation email sent to your finance contact</li>
            <li>Teacher logins created within 48 hours</li>
            <li>Onboarding call scheduled on Google Meet</li>
            <li>Full curriculum access activated</li>
          </ol>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/dashboard" className="btn-primary inline-flex justify-center">
            Go to Teacher Dashboard
          </Link>
          <Link to="/admin" className="btn-outline inline-flex justify-center">
            View Admin Panel
          </Link>
        </div>
      </div>
    </Layout>
  );
}
