import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    } else if (window.location.href == "http://127.0.0.1:5173/" && !token) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login name="login" />} />
      <Route path="/signup" element={<SignUp name="signup" />} />
    </Routes>
  );
}

export default App;
