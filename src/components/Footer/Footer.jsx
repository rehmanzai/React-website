import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-10 bg-[var(--nav)] px-6 pb-6 pt-14 text-[#d4ded7] sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr]">
          <div>
            <Link to="/" className="text-2xl font-bold text-[var(--accent-light)]">
              React Website
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#c9d4cd]">
              We create clear, useful digital experiences that help people get where they need to go.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase text-[var(--accent-light)]">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link className="hover:text-white" to="/">Home</Link></li>
              <li><Link className="hover:text-white" to="/about">About</Link></li>
              <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase text-[var(--accent-light)]">
              Let’s talk
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#c9d4cd]">
              Have a question or an idea? We’d be glad to hear from you.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-md border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent-light)] hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-xs text-[#b7c4bb] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 React Website. All rights reserved.</span>
          <span>Built around clear, useful experiences.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;