import { LoginUser, LogoutUser, RegisterUser } from "@/API/API";
import Register from "@/pages/Auth/Register";
import useUIStore from "@/zustand/UIStore";
import { useMutation } from "@tanstack/react-query";

function Mutations() {
  const setAuthUser = useUIStore((state) => state.setAuthUser);
  const setAuthToast = useUIStore((state) => state.setAuthToast);

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (data) => RegisterUser(data),
    onSuccess: (data) => {
      console.log("Success data:", data);
      setAuthToast({
        open: true,
        message: "User registered successfully",
        severity: "success",
      });
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 2000);
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setAuthToast({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    },
  });

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => LoginUser(data),
    onSuccess: (data) => {
      setAuthToast({
        open: true,
        message: "User logged in successfully",
        severity: "success",
      });
      console.log("data", data);
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setAuthToast({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    },
  });
  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => LogoutUser(),
    onSuccess: (data) => {
      setAuthToast({
        open: true,
        message: "User Logged out successfully",
        severity: "success",
      });
      localStorage.removeItem("user");
      setAuthUser(null);
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setAuthToast({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    },
  });

  return { registerMutation, loginMutation, logoutMutation };
}

export default Mutations;
