import PropTypes from "prop-types";
import Card from "./Card";

function List({ limit, children }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {limit?.map((obj, i) => {
          return <Card key={i} data={obj} />;
        })}
      </div>
      {children}
    </>
  );
}

List.propTypes = {
  limit: PropTypes.array,
  children: PropTypes.any,
};

export default List;
