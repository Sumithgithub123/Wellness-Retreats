import { useEffect } from "react";
import baseurl from "../services/api";

export function useSearch(search, dispatch) {
  useEffect(() => {
    const controller = new AbortController();
    async function getsearch() {
      try {
        dispatch({ type: "data/loading" });
        const res = await fetch(`${baseurl}?search=${search}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        if (data === "Not found") throw new Error("Not found");
        dispatch({ type: "data/storing", payload: data });
      } catch (e) {
        if (e.message !== "signal is aborted without reason")
          dispatch({
            type: "data/error",
            payload: "No results found. Please try different search.",
          });
      }
    }
    if (search.length < 2) return;
    getsearch();

    return () => {
      dispatch({ type: "stoploading" });
      controller.abort();
    };
  }, [search, dispatch]);
}
