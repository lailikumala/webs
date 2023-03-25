import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      login({
        email: "admin@gmail.com",
        password: "admin123",
      })
    );
  }, [dispatch]);
  return <div>Login</div>;
};

export default Login;
