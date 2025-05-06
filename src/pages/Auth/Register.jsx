import TextComponent from "@/components/ui/TextComponent";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleRegister = () => {};
  return (
    <div className="auth-card">
      <h3>Register</h3>
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
      <button className="glb-btn" onClick={handleRegister}>
        Register
      </button>
      <NavLink className="auth-link" to="/auth/login">
        Have an account?
      </NavLink>
    </div>
  );
}

export default Register;
