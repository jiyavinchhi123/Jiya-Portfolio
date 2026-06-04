import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import Button from "./Button";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Contact Me" subtitle="Let's Connect" />
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
          <Card className="!shadow-[0_0_18px_rgba(147,197,253,0.35)] dark:!shadow-[0_0_28px_rgba(59,130,246,0.6)]">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm text-slate-600 dark:text-white/70">Name</label>
                <input
                  className="mt-2 w-full rounded-xl bg-white/60 dark:bg-white/10 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-slate-600 dark:text-white/70">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl bg-white/60 dark:bg-white/10 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-slate-600 dark:text-white/70">Message</label>
                <textarea
                  rows="4"
                  className="mt-2 w-full rounded-xl bg-white/60 dark:bg-white/10 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white"
                  placeholder="Tell me about your project"
                  required
                />
              </div>
              <div className="flex items-center gap-3">
                <Button>Send Message</Button>
                {submitted && (
                  <motion.span
                    className="text-sm text-cyan-600 dark:text-cyan-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Message sent! (EmailJS placeholder)
                  </motion.span>
                )}
              </div>
            </form>
          </Card>
          <div className="space-y-4">
            <Card className="!shadow-[0_0_18px_rgba(147,197,253,0.35)] dark:!shadow-[0_0_28px_rgba(59,130,246,0.6)]">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Email Integration</h3>
              <p className="text-slate-600 dark:text-white/70 mt-2">
                Connect EmailJS or your backend API to handle form submissions.
                This template is ready for integration.
              </p>
            </Card>
            <Card className="!shadow-[0_0_18px_rgba(147,197,253,0.35)] dark:!shadow-[0_0_28px_rgba(59,130,246,0.6)]">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Social Links</h3>
              <div className="mt-4 flex items-center gap-4 text-slate-600 dark:text-white/70">
                <a className="hover:text-cyan-500 dark:hover:text-cyan-300 transition" href="https://github.com">
                  <FiGithub size={20} />
                </a>
                <a className="hover:text-cyan-500 dark:hover:text-cyan-300 transition" href="https://linkedin.com">
                  <FiLinkedin size={20} />
                </a>
                <a className="hover:text-cyan-500 dark:hover:text-cyan-300 transition" href="mailto:hello@example.com">
                  <FiMail size={20} />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
