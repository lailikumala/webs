const initialState = {
  data: [],
  loadingContent: false,
};

const Content = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LISTCONTENT":
      return {
        ...state,
        loadingContent: false,
        data: action.payload,
      };
    case "ERRORLISTCONTENT":
      return {
        ...state,
        loadingContent: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default Content;
