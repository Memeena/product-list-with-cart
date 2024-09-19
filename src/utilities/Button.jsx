import { Link } from "react-router-dom";

export default function Button({ type, to, children, onClick, className }) {
  console.log(type);
  const base =
    " bottom-[28%] left-[28%] flex items-center rounded-full font-semibold px-6 py-2 md:bottom-[15%] md:left-[40%] min-[520px]:bottom-[20%] min-[520px]:px-8 min-[520px]:py-3 disabled:cursor-not-allowed transition-all duration-500 focus:outline-none text-[16px]";
  const styles = {
    primary: base + " absolute bg-red-500 text-rose-50 justify-between gap-8",
    secondary:
      base +
      " absolute border-stone-300 border-2 text-rose-900 justify-center bg-white gap-2",
    tertiary:
      "inline-block bg-red-500 text-rose-50 px-6 py-3 font-semibold rounded-full disabled:cursor-not-allowed transition-all duration-500 focus:outline-none text-[16px]  ",
  };

  if (type === "secondary")
    return (
      <button className={styles[type]} onClick={onClick}>
        <img
          src="../assets/images/icon-add-to-cart.svg"
          alt="add-to-cart-icon"
        />
        {children}
      </button>
    );
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${className ? className + styles[type] : styles[type]}`}
    >
      {children}
    </button>
  );
}
