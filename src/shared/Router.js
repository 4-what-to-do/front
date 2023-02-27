import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Membership from "../pages/Membership";
import MyTodo from "../pages/MyTodo";
import Community from '../pages/Community'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/mytodo" element={<MyTodo />} />
        <Route path="/community" element={<Community />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;