import { Link } from "react-router-dom";

function Button({
  to,
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600",

    secondary:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",

    dark:
      "bg-gray-900 text-white hover:bg-black",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;