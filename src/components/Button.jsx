export default function Button({ variant = "primary", children, href, onClick }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:scale-105"
      : "border border-slate-300/70 dark:border-white/20 text-slate-700 dark:text-white hover:border-white/60";

  if (href) {
    return (
      <a className={`${base} ${styles}`} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
