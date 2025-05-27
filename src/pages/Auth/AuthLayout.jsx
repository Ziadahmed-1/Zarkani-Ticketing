import Toast from "@/components/ui/Toast";
import useUIStore from "@/zustand/UIStore";
import React from "react";
import { Outlet } from "react-router";

function AuthLayout() {
  const authToast = useUIStore((state) => state.authToast);
  const setAuthToast = useUIStore((state) => state.setAuthToast);
  return (
    <div>
      <Outlet />
      <Toast
        open={authToast.open}
        message={authToast.message}
        severity={authToast.severity}
        onClose={() => setAuthToast({ open: false, message: "", severity: "" })}
      />
    </div>
  );
}

export default AuthLayout;
