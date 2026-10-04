import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [brandActive, setBrandActive] = useState(false);

  return (
    <nav className="bg-[var(--nav)] text-white shadow-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:gap-8 sm:px-6">

        <Link
          to="/"
          className="site-brand shrink-0 text-lg font-bold text-[var(--accent-light)] sm:text-2xl"
          onPointerEnter={() => setBrandActive(true)}
          onPointerLeave={() => setBrandActive(false)}
          onFocus={() => setBrandActive(true)}
          onBlur={() => setBrandActive(false)}
          style={{ top: brandActive ? "-3px" : "0px" }}
        >
          React Website
        </Link>

        <div className="nav-links ml-auto flex gap-3 sm:gap-6">
          <Link
            to="/"
            className="transition hover:text-[var(--accent-light)]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="transition hover:text-[var(--accent-light)]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition hover:text-[var(--accent-light)]"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;