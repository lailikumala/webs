import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "../components/cardContent";
import { AuthLogout } from "../redux/actions/auth";
import { listContent } from "../redux/actions/content";
import Swal from "sweetalert2";

const Home = () => {
  const { data } = useSelector((state) => state.Content);
  const { isLogin, data: Auth } = useSelector((state) => state.Auth);
  const token = Auth?.data?.token;
  const dispatch = useDispatch();

  const logout = () => {
    Swal.fire({
      title: "Are you sure to exit?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await localStorage.clear();
        await dispatch(AuthLogout);
        window.location.href = "/";
      }
    });
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/";
    }
  }, [isLogin]);

  useEffect(() => {
    dispatch(
      listContent({
        token: token,
      })
    );
  }, [dispatch, token]);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold m-5">Content</p>
        <button
          className="text-lg font-semibold m-5 cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      {data?.map((e) => (
        <CardContent
          key={e?.content_id}
          id={e?.content_id}
          title={e?.title}
          desc={e?.description}
        />
      ))}
    </div>
  );
};

export default Home;
