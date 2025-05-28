import useUIStore from "@/zustand/UIStore";
import React from "react";

function RemoveAuthUser() {
  const setAuthUser = useUIStore.getState().setAuthUser;
  localStorage.removeItem("user");
  setAuthUser(null);
  window.location.href = "/auth/login";
}

export default RemoveAuthUser;
