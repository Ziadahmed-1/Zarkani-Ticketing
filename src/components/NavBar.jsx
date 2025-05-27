import useUIStore from "@/zustand/UIStore";
import React from "react";
import { MdTableRows } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import Mutations from "@/Helpers/Mutations";

function NavBar() {
  const authUser = useUIStore((state) => state.authUser);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const isDarkMode = useUIStore((state) => state.isDarkMode);
  const toggleDarkMode = useUIStore((state) => state.toggleDarkMode);
  const { logoutMutation } = Mutations();

  function handleLogout() {
    logoutMutation.mutate();
  }
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
        <img src="/profile.webp" alt="profile" className="avatar"></img>
        <span>{authUser?.userName}</span>
      </div>
      <div className="right">
        <button className="glb-btn" onClick={toggleDarkMode}>
          {isDarkMode ? <BsSun /> : <BsMoonStars />}
        </button>
        <button className="glb-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
