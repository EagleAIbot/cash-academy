/** Replace with live Stripe Payment Link when ready */
export const STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/test_cash_academy_placeholder";

export const SALES_PLANS = [
  {
    id: "curriculum",
    name: "Curriculum",
    price: 99,
    interval: "month",
    setupFee: 1999,
    badge: null,
    desc: "Full digital curriculum access for your school. Everything a teacher needs, nothing they don't.",
    features: [
      "Year 3–6 lesson library",
      "Teacher dashboard & lesson plans",
      "Downloadable PDFs & presentations",
      "New lessons added automatically",
      "Email support for teachers",
    ],
  },
  {
    id: "complete",
    name: "Curriculum + Workshops",
    price: 149,
    interval: "month",
    setupFee: 1999,
    badge: "Most popular",
    desc: "Curriculum plus priority Money Town™ workshop booking and in-school support.",
    features: [
      "Everything in Curriculum",
      "Money Town™ workshop booking",
      "Priority workshop dates",
      "Termly check-in with Becky",
      "Dedicated school onboarding call",
    ],
  },
];

export function formatGBP(amount) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}
