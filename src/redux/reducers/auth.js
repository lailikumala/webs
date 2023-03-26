const initialState = {
  data: [],
  loading: false,
};

const Auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload,
      };
    case "ERRORLOGIN":
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        _persist: { rehydrated: true, version: -1 },
      };
    default:
      return state;
  }
};
export default Auth;
