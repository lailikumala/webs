import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        login({
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex-row w-full px-8 py-12 mt-10 rounded-md shadow lg:w-1/4 md:w-1/2">
        <p className="text-2xl font-semibold text-center text-base-blue">
          Login
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <label className="m-2 text-lg font-semibold text-gray-400">
              Email
            </label>
            <input
              className="w-full p-3 m-3 border-2 rounded-lg border-base-blue"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="m-2 text-lg font-semibold text-gray-400">
              Password
            </label>
            <input
              className="w-full p-3 m-3 border-2 rounded-lg border-base-blue"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            disabled={email && password ? false : true}
            type="submit"
            className={`w-full p-3 m-3 text-lg font-bold text-white rounded-lg ${
              email && password ? "bg-base-blue" : "bg-base-grey"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
