import { useReducer } from "react";
import { useSearch } from "./hooks/useSearch";
import { useGetData } from "./hooks/useGetData";
import { useByType } from "./hooks/useByType";
import { useByDate } from "./hooks/useByDate";
import reducer from "./reducer";

import Banner from "./components/Banner";
import FilterSearch from "./components/FilterSearch";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import NavButtons from "./components/NavButtons";

const initialstate = {
  retreat: [],
  loading: true,
  page: 0,
  error: "",
  search: "",
  type: "",
  date: null,
};

function App() {
  const [{ retreat, loading, page, error, search, type, date }, dispatch] =
    useReducer(reducer, initialstate);

  useGetData(dispatch);
  useSearch(search, dispatch);
  useByType(type, dispatch);
  useByDate(date, dispatch);

  const limit = retreat?.slice(page, page + 3);
  const disableNext =
    limit[limit.length - 1]?.id === retreat[retreat.length - 1]?.id;
  const disablePrevious = limit[0]?.id === retreat[0]?.id;

  return (
    <div className="m-0 grid h-screen grid-rows-[auto_1fr_auto] scroll-smooth">
      <Header />
      <main className="mx-auto w-full max-w-[463px] space-y-4 p-4 sm:max-w-full">
        <Banner />
        <FilterSearch
          dispatch={dispatch}
          type={type}
          date={date}
          search={search}
        />
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <List limit={limit}>
            <NavButtons
              disableNext={disableNext}
              disablePrevious={disablePrevious}
              dispatch={dispatch}
            />
          </List>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
