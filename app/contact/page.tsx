"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Impact Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Questions about partnerships, Linksy access, or collaboration?
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-site mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-impact-blue/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-impact-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
              <a href="mailto:info@impactworks.us" className="text-text-dark font-medium hover:text-impact-blue transition-colors">info@impactworks.us</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-accent/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-teal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Phone</p>
              <a href="tel:9043301848" className="text-text-dark font-medium hover:text-teal-accent transition-colors">904.330.1848</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-deep-blue/10 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-text-dark font-medium">Clay County, Florida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto max-w-xl">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-teal-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-text-dark mb-3">
                Message Sent
              </h2>
              <p className="text-gray-600">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-impact-blue/30 focus:border-impact-blue transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-impact-blue/30 focus:border-impact-blue transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-impact-blue/30 focus:border-impact-blue transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-impact-blue text-white font-semibold py-3 rounded-lg hover:bg-deep-blue transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
