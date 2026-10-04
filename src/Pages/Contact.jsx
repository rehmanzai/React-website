import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <p className="font-semibold text-[var(--accent)]">
          GET IN TOUCH
        </p>

        <h1 className="mt-3 text-4xl font-bold text-[var(--ink)]">
          Contact Us
        </h1>

        <p className="mt-4 text-[var(--muted)]">
          Have a question? Send us a message.
        </p>

      </div>

      <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-white p-8 shadow-md">

        {submitted && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-6">
            Message submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-[#45564d]">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-[var(--border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />

          </div>

          {/* Email */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-semibold text-[#45564d]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-[var(--border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />

          </div>

          {/* Message */}
          <div className="mb-6">

            <label className="mb-2 block text-sm font-semibold text-[#45564d]">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="5"
              required
              className="w-full rounded-lg border border-[var(--border)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--accent)] py-3 font-semibold text-white transition hover:bg-[var(--accent-hover)]"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;