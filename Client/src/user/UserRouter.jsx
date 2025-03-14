import React from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./UserHome";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHome/>} />
    </Routes>
  );
};

export default UserRouter;