import { useEffect } from "react";
import baseurl from "../services/api";

export function useByType(type, dispatch) {
  useEffect(() => {
    async function getbyType() {
      try {
        dispatch({ type: "data/loading" });
        const res = await fetch(`${baseurl}?title=${type}`);
        const data = await res.json();
        if (data === "Not found") throw new Error("No results found.");
        dispatch({ type: "data/storing", payload: data });
      } catch (e) {
        dispatch({ type: "data/error", payload: e.message });
      }
    }
    if (!type) return;
    getbyType();
  }, [type, dispatch]);
}
