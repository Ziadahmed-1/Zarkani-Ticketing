import TextComponent from "@/components/ui/TextComponent";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = () => {};
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
        <label>Email</label>
        <TextComponent
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
    </div>
  );
}

export default Login;
