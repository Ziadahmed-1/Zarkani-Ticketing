import useUIStore from "@/zustand/UIStore";
import React from "react";
import { MdTableRows } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  return (
    <div className="nav-bar">
      <div className="left">
        <button className="glb-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdOutlineClose size={14} />
          ) : (
            <MdTableRows size={14} />
          )}
        </button>
        <img src="/profile.webp" alt="profile" class="avatar"></img>
      </div>
      <div>
        <button className="glb-btn">Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
