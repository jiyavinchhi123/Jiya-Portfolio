import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar({ sections, active, onToggleTheme, theme }) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-[0_0_18px_rgba(59,130,246,0.35)] ${
        theme === "dark" ? "bg-[#0a0a0a] border-white/10" : "bg-white/90 border-slate-200/60"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className={`text-lg font-semibold tracking-wide ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          <span
            className={`mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border shadow-[0_0_14px_rgba(59,130,246,0.5)] ${
              theme === "dark"
                ? "border-white/40 text-white"
                : "border-slate-400/60 text-slate-900"
            }`}
          >
            JV
          </span>
          <span className="opacity-70">Jiya Vinchhi</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative transition px-1 py-1 ${
                active === section.id
                  ? theme === "dark"
                    ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                    : "text-slate-900 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  : theme === "dark"
                    ? "text-white/60 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {section.label}
              {active === section.id && (
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full shadow-[0_0_14px_rgba(59,130,246,0.6)] ${
                    theme === "dark" ? "bg-white" : "bg-slate-900"
                  }`}
                />
              )}
            </a>
          ))}
        </div>
        <button
          className={`ml-4 inline-flex items-center justify-center h-10 w-10 rounded-full border transition shadow-[0_0_14px_rgba(59,130,246,0.5)] ${
            theme === "dark"
              ? "border-white/20 hover:border-white/60 text-white"
              : "border-slate-300/70 hover:border-slate-500 text-slate-700"
          }`}
          onClick={onToggleTheme}
          type="button"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </motion.nav>
  );
}
