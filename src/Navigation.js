import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./components/privateRoutes";
// import PublicRoute from "./components/publicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        {/* <PublicRoute component={Login} restricted={true} path="/login" />
        <PrivateRoute exact component={Home} path="/" /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
