import React from "react";
import { Route, Routes } from "react-router-dom";
import Hospital from "./HospitalHome";

const HospitalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hospital/>} />
    </Routes>
  );
};

export default HospitalRouter;