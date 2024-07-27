import PropTypes from "prop-types";
import Button from "./Button";

function NavButtons({ disableNext, disablePrevious, dispatch }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        disabled={disablePrevious}
        onclick={() => dispatch({ type: "page/previous" })}
      >
        Previous
      </Button>
      <Button
        disabled={disableNext}
        onclick={() => dispatch({ type: "page/next" })}
      >
        Next
      </Button>
    </div>
  );
}

NavButtons.propTypes = {
  disableNext: PropTypes.bool,
  disablePrevious: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default NavButtons;
