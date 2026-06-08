import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Home from "./pages/Home.jsx";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("hero");
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setScroll(progress);

      const offset = 140;
      let current = "hero";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollTop + offset >= top) {
            current = section.id;
          }
        }
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // IntersectionObserver removed in favor of scroll position logic
  }, []);

  const handleToggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const background = useMemo(
    () =>
      theme === "dark"
        ? "bg-[#0a0a0a] text-white"
        : "bg-slate-50 text-slate-900",
    [theme]
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${background} transition-colors duration-500`}>
      <ScrollProgress value={scroll} />
      <Navbar
        sections={sections}
        active={active}
        onToggleTheme={handleToggleTheme}
        theme={theme}
      />
      <Home theme={theme} />
      <Footer />
    </div>
  );
}
