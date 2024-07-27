import PropTypes from "prop-types";

function Button({ onclick, disabled, children }) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`w-16 rounded-full bg-violet-950 px-2 py-2 text-xs font-medium text-slate-100 placeholder-slate-100 ${disabled && "disabled:cursor-not-allowed disabled:bg-violet-400"} sm:rounded`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
