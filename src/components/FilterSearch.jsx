import { memo } from "react";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Search from "./Search";

function FilterSearch({ date, type, search, dispatch }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
        <div>
          <select
            className="w-full rounded bg-stone-200 px-2 py-2 text-sm font-normal text-stone-700 placeholder:text-slate-500 sm:w-32 sm:bg-violet-950 sm:font-medium sm:text-slate-100 sm:placeholder-slate-100"
            type="text"
            onChange={(e) =>
              dispatch({ type: "type/set", payload: e.target.value })
            }
            placeholder="Filter by Type"
            value={type}
          >
            <option value="" className="hidden">
              Filter by Type
            </option>
            <option value="Yoga">Yoga</option>
            <option value="Meditation">Meditation</option>
            <option value="Detox">Detox</option>
          </select>
        </div>
        <div>
          <DatePicker
            placeholderText="Filter by Date"
            className="w-full rounded bg-stone-200 px-2 py-2 text-sm font-normal text-stone-700 placeholder:text-slate-800 sm:w-32 sm:bg-violet-950 sm:font-medium sm:text-slate-100 sm:placeholder-slate-100"
            onChange={(date) => dispatch({ type: "date/set", payload: date })}
            selected={date}
          />
        </div>
      </div>
      <Search search={search} dispatch={dispatch} />
    </div>
  );
}

FilterSearch.propTypes = {
  date: PropTypes.any,
  type: PropTypes.string,
  search: PropTypes.string,
  dispatch: PropTypes.func,
};

export default memo(FilterSearch);
