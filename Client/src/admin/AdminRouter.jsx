import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome/>} />
    </Routes>
  );
};

export default AdminRouter;