import AuthLayout from "@/pages/Auth/AuthLayout";
import Register from "@/pages/Auth/Register";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Auth/Login";
import MainLayout from "@/pages/MainLayout";
import NotFound from "@/pages/NotFound";
import Settings from "@/pages/Settings";
import Tickets from "@/pages/Tickets";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NewTicket from "@/pages/NewTicket";
function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="newTicket" element={<NewTicket />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
