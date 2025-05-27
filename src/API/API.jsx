import axiosInstance from "./axios";

export function RegisterUser(data) {
  return axiosInstance
    .post("/api/Authonticate/Register", data)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Registration failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Register error:", err);
      throw new Error(err.message || "Registration failed"); // This is important for react-query to catch the error
    });
}
export function LoginUser(data) {
  return axiosInstance
    .post("/api/Authonticate/Login", data)
    .then((res) => {
      console.log("from login", res);
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Login failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Login error:", err);
      throw new Error(err.message || "Login failed"); // This is important for react-query to catch the error
    });
}
export function LogoutUser() {
  return axiosInstance
    .post("/api/Authonticate/Logout")
    .then((res) => {
      console.log("from login", res);
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Lougout failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Lougout error:", err);
      throw new Error(err.message || "Lougout failed"); // This is important for react-query to catch the error
    });
}
