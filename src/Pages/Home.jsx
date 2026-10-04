import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-[var(--surface)]">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="mb-3 font-semibold text-[var(--accent)]">
            WELCOME TO OUR WEBSITE
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl">
            Building Modern Digital Experiences
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            We create simple, modern and user-friendly web experiences
            using modern technologies.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/about"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              Learn More
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-[var(--border)] px-6 py-3 font-semibold text-[#45564d] transition hover:bg-[#edf2ee]"
            >
              Contact Us
            </Link>

          </div>
        </div>

        {/* Simple Visual */}
        <div className="hero-panel rounded-2xl bg-gradient-to-br from-[#285f4d] to-[#43856d] p-10 text-white shadow-xl">

          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">

            <h2 className="text-2xl font-bold">
              Modern Web Solutions
            </h2>

            <p className="hero-panel-copy mt-4 text-[#e5eee8]">
              Clean design, responsive layout and smooth user experience.
            </p>

          </div>

        </div>

      </div>

      {/* Features */}
      <div className="bg-[#edf2ee] py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-3xl font-bold text-[var(--ink)]">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--ink)]">
                Modern Design
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                Clean and professional interfaces designed for users.
              </p>
            </div>

            <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--ink)]">
                Responsive
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                Websites that work smoothly on different screen sizes.
              </p>
            </div>

            <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[var(--ink)]">
                User Friendly
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                Simple navigation and an easy-to-use experience.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;