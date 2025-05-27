import TextComponent from "@/components/ui/TextComponent";
import Toast from "@/components/ui/Toast";
import Mutations from "@/Helpers/Mutations";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { loginMutation } = Mutations();

  const handleLogin = () => {
    if (!formData.name || !formData.password) {
      setToast({
        open: true,
        message: "Please fill all the fields correctly",
        severity: "error",
      });
    } else {
      loginMutation.mutate({
        userName: formData.name,
        password: formData.password,
      });
    }
  };
  return (
    <div className="auth-card">
      <h3>Login</h3>

      <div className="block">
        <label>Name</label>
        <TextComponent
          type="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="block">
        <label>Password</label>
        <TextComponent
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <hr />
      <button className="glb-btn" onClick={handleLogin}>
        Login
      </button>
      <NavLink className="auth-link" to="/auth/register">
        Register
      </NavLink>
      <Toast
        open={toast.open}
        message={toast.message}
        severity={toast.severity}
        onClose={() => setToast({ open: false, message: "", severity: "" })}
      />
    </div>
  );
}

export default Login;
