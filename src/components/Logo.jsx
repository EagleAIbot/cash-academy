import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

export function Logo({ className = "h-10" }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={`${base}assets/logo.png`} alt="Cash Academy" className={className} />
    </Link>
  );
}

export function CoinMark({ className = "h-8 w-8" }) {
  return (
    <img
      src={`${base}assets/illustration-coins.png`}
      alt=""
      className={className}
      aria-hidden
    />
  );
}
