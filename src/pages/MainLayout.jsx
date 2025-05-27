import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/NavBar";
import useUIStore from "@/zustand/UIStore";
import { jwtDecode } from "jwt-decode";

import React, { useEffect } from "react";
import { Outlet } from "react-router";

function MainLayout() {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const token = userLocal?.encodedPayload;

  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  useEffect(() => {
    if (!userLocal) {
      window.location.href = "/auth/login";
    }
  }, [userLocal]);

  //check expiration
  if (token) {
    try {
      console.log("Token:", token);
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded);
      // use decoded token
    } catch (error) {
      console.error("Invalid token:", error);
      // handle invalid token (e.g., logout)
    }
  } else {
    console.warn("No token found");
    // handle no token case (redirect to login)
  }

  return (
    <aside style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <LeftSideBar isSidebarOpen={isSidebarOpen} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </aside>
  );
}

export default MainLayout;
