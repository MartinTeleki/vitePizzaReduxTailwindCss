import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "mx-2 my-4 text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + "  py-2 px-4 md:px-5 md:py-2.5 text-xs",
    round: base + "  py-1 px-2.5 md:px-3.5 md:py-2.5 text-sm",
    secondary:
      "mx-2 my-4 inline-block text-sm rounded-full bg-transparent  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 hover:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 ",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {" "}
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
