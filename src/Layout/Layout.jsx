import Dashboard from "@/pages/Dashboard";
import MainLayout from "@/pages/MainLayout";
import NotFound from "@/pages/NotFound";
import Settings from "@/pages/Settings";
import Tickets from "@/pages/Tickets";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
