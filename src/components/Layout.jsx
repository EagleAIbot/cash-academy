import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/schools", label: "For Schools" },
  { to: "/dashboard", label: "Teacher Dashboard" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/money-town", label: "Money Town™" },
  { to: "/admin", label: "Admin" },
  { to: "/roadmap", label: "Roadmap" },
];

export function DemoBanner() {
  return (
    <div className="bg-slate-900 px-4 py-2 text-center text-xs font-medium text-white/90">
      SCALR Live Demo · Cash Academy Platform Preview · No data is saved
    </div>
  );
}

export function Layout({ children, wide = false }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-slate-50">
      <DemoBanner />
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className={`mx-auto flex h-16 items-center justify-between px-4 ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
          <Logo className="h-9" />
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname.startsWith(item.to)
                    ? "bg-ca-blue-light text-ca-blue"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            {!isHome && (
              <Link to="/" className="btn-outline !py-2 !text-xs">
                Back to Home
              </Link>
            )}
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className={wide ? "" : ""}>{children}</main>
      <footer className="mt-auto border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-lg font-black tracking-tight text-slate-900">
            SMART MONEY. <span className="text-ca-blue">START YOUNG.</span>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Cash Academy · Financial literacy for primary schools · Demo by SCALR
          </p>
        </div>
      </footer>
    </div>
  );
}
