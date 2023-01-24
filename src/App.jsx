import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (typeof token === "string") {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login name="login" />} />
      <Route path="/signup" element={<SignUp name="signup" />} />
    </Routes>
  );
}

export default App;
