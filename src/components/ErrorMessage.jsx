import PropTypes from "prop-types";

function ErrorMessage({ message }) {
  return (
    <div className="mx-auto h-52 p-5 sm:max-w-[550px]">
      <div className="mt-14 rounded bg-stone-300 p-3 text-center text-lg font-semibold text-stone-600 shadow-md">
        {message}😢
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
