import axios from "axios";

export const listContent = (fields) => (dispatch) => {
  axios
    .get(`http://localhost:5000/api/v1/content`, {
      headers: {
        auth: fields.token,
      },
    })
    .then((res) => {
      const ResponseAPI = res?.data?.data;
      dispatch({ type: "LISTCONTENT", payload: ResponseAPI });
      console.log(ResponseAPI, "get");
    })
    .catch((err) => {
      const ResponseError = err?.response;
      console.log("err", ResponseError);
      dispatch({ type: "ERRORLISTCONTENT", payload: ResponseError });
    });
};
