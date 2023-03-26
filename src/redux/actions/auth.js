import axios from "axios";
import Swal from "sweetalert2";

export const login = (fields, navigate) => (dispatch) => {
  axios
    .post(`http://localhost:5000/api/v1/auth/login`, fields)
    .then((res) => {
      const ResponseAPI = res?.data?.data;
      dispatch({ type: "LOGIN", payload: ResponseAPI });
      if (ResponseAPI.message === "Login Successful") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: ResponseAPI?.message,
        });
        navigate("/home");
      }
    })
    .catch((err) => {
      const ResponseError = err?.response;
      console.log("err", ResponseError);
      dispatch({ type: "ERRORLOGIN", payload: ResponseError });
      if (ResponseError.status === 429) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: ResponseError.data,
        });
      } else if (ResponseError.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: ResponseError.data?.data?.message,
        });
      }
    });
};

export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};
