function reducer(state, { type, payload }) {
  switch (type) {
    case "data/loading":
      return { ...state, error: "", loading: true };

    case "data/storing":
      return { ...state, retreat: payload, loading: false };

    case "data/error":
      return { ...state, error: payload, loading: false };

    case "type/set":
      return { ...state, type: payload, search: "", date: null, page: 0 };

    case "date/set":
      return { ...state, date: payload, type: "", search: "", page: 0 };

    case "search/set":
      return { ...state, search: payload, type: "", date: null, page: 0 };

    case "page/previous":
      return { ...state, page: state.page - 3 };

    case "page/next":
      return { ...state, page: state.page + 3 };

    case "stoploading":
      return { ...state, loading: false };

    default:
      return state;
  }
}

export default reducer;
