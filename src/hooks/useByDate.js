import { useEffect } from "react";
import { fromTimestamp, format } from "../services/formatdate";
import baseurl from "../services/api";

export function useByDate(date, dispatch) {
  useEffect(() => {
    async function getbyDate() {
      try {
        dispatch({ type: "data/loading" });
        const res = await fetch(`${baseurl}`);
        const data = await res.json();
        if (data === "Not found") throw new Error("Retreats Not Available");

        const neww = data.filter((retreat) => {
          if (fromTimestamp(retreat.date).includes(format(date)))
            return retreat;
        });

        if (neww.length < 1)
          throw new Error(`Retreat not available on ${format(date)}`);

        dispatch({ type: "data/storing", payload: neww });
      } catch (e) {
        dispatch({ type: "data/error", payload: e.message });
      }
    }
    if (!date) return;
    getbyDate();
  }, [date, dispatch]);
}
