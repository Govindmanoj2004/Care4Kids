import React from "react";
import { Route, Routes } from "react-router-dom";
import GuestHome from "./GuestHome";
import Login from "./Login";
import Register from "./Register";

const RouterGuest = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestHome />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
};

export default RouterGuest;