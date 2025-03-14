import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RouterGuest from './guest/GuestRouter';
import AdminRouter from './admin/AdminRouter';
import HospitalRouter from './hospital/HospitalRouter';
import UserRouter from './user/UserRouter';

const RouterMain = () => {
  return (
    <Routes>
      <Route path='/*' element={<RouterGuest/>} />
      <Route path='/admin/*' element={<AdminRouter/>} />
      <Route path='/hospital/*' element={<HospitalRouter/>} />
      <Route path='/user/*' element={<UserRouter/>} />
    </Routes>
  );
};

export default RouterMain;