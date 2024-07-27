import { fromTimestamp } from "../services/formatdate";
import PropTypes from "prop-types";

function Card({ data }) {
  const { image, title, description, date, location, price } = data;
  return (
    <div className="mx-auto flex h-fit min-h-80 w-[480px] flex-col gap-2 space-y-1 rounded bg-stone-300 px-3 py-3 shadow-md">
      <img
        className="h-32 w-[420px] rounded-2xl object-cover sm:h-32 sm:w-56"
        src={image}
        alt="retreat_image"
      />
      <div className="space-y-2">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm italic">{description}</p>
        <p className="text-sm">Date: {fromTimestamp(date)}</p>
        <p className="text-sm">Location: {location}</p>
        <p className="text-sm">Price:$ {price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
