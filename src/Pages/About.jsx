function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="max-w-3xl mx-auto text-center">

        <p className="font-semibold text-[var(--accent)]">
          ABOUT US
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[var(--ink)]">
          We Build Better Web Experiences
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
          Our goal is to create modern, responsive and user-friendly
          websites that provide a smooth experience for every visitor.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">

        <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--ink)]">
            Our Mission
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            To create useful and reliable digital experiences.
          </p>
        </div>

        <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--ink)]">
            Our Vision
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            To make modern technology simple and accessible.
          </p>
        </div>

        <div className="feature-card rounded-xl border border-[var(--border)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--ink)]">
            Our Values
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            Quality, simplicity, creativity and user satisfaction.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;