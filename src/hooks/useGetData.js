import { useEffect } from "react";
import baseurl from "../services/api";

export function useGetData(dispatch) {
  useEffect(() => {
    async function getdata() {
      try {
        dispatch({ type: "data/loading" });
        const res = await fetch(`${baseurl}`);
        const data = await res.json();
        dispatch({ type: "data/storing", payload: data });
      } catch (e) {
        dispatch({ type: "data/error", payload: "Something went wrong" });
      }
    }
    getdata();
  }, [dispatch]);
}
