import axios from "axios";
// import swal from "sweetalert2";

export const login = (fields) => (dispatch) => {
  axios
    .post(`http://localhost:5000/api/v1/auth/login`, fields)
    .then((res) => {
      const ResponseAPI = res?.data?.data;
      dispatch({ type: "LOGIN", payload: ResponseAPI });
    })
    .catch((err) => dispatch({ type: "ERRORLOGIN", payload: err?.response }));
};
