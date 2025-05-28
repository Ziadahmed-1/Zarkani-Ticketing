import useCheckAuthUser from "@/components/CustomHooks/useCheckAuthUser";
import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/NavBar";
import useUIStore from "@/zustand/UIStore";
import React from "react";
import { Outlet } from "react-router";

function MainLayout() {
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);

  useCheckAuthUser();

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
