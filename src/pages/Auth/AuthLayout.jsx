import Toast from "@/components/ui/Toast";
import useUIStore from "@/zustand/UIStore";
import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  const glbToast = useUIStore((state) => state.glbToast);
  const setGlbToast = useUIStore((state) => state.setGlbToast);
  return (
    <div>
      <Outlet />
      {/* <Toast
        open={glbToast.open}
        message={glbToast.message}
        severity={glbToast.severity}
        onClose={() => setGlbToast({ open: false, message: "", severity: "" })}
      /> */}
    </div>
  );
}

export default AuthLayout;
