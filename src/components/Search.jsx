import PropTypes from "prop-types";

function Search({ search, dispatch }) {
  return (
    <div>
      <input
        className="placeholder:slate-100 w-full rounded border px-2 py-2 text-sm font-normal text-stone-700 focus:outline-none sm:w-72 sm:bg-violet-950 sm:font-medium sm:text-slate-100 sm:placeholder:text-slate-100 md:w-96"
        type="text"
        value={search}
        onChange={(e) =>
          dispatch({ type: "search/set", payload: e.target.value })
        }
        placeholder="Search retreats by title, location, price etc."
        onMouseEnter={(e) =>
          (e.target.placeholder = "Min 2 letters needed to search!")
        }
        onMouseLeave={(e) =>
          (e.target.placeholder =
            "Search retreats by title, location, price etc.")
        }
        name=""
        id=""
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func,
};

export default Search;
