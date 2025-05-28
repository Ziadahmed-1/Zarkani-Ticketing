import { LoginUser, LogoutUser, RegisterUser } from "@/API/AuthAPI";
import Register from "@/pages/Auth/Register";
import useUIStore from "@/zustand/UIStore";
import { useMutation } from "@tanstack/react-query";
import RemoveAuthUser from "./RemoveAuthUser";
import { AddNewTicket } from "@/API/MainAPI";

function Mutations() {
  const setGlbToast = useUIStore((state) => state.setGlbToast);

  const registerMutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (data) => RegisterUser(data),
    onSuccess: (data) => {
      console.log("Success data:", data);
      setGlbToast({
        open: true,
        message: "User registered successfully",
        severity: "success",
      });
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1000);
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setGlbToast({
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
      setGlbToast({
        open: true,
        message: "User logged in successfully",
        severity: "success",
      });
      console.log("data", data);
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setGlbToast({
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
      setGlbToast({
        open: true,
        message: "User Logged out successfully",
        severity: "success",
      });
      RemoveAuthUser();
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setGlbToast({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    },
  });

  const newTicketMutation = useMutation({
    mutationKey: ["newTicket"],
    mutationFn: (data) => AddNewTicket(data),
    onSuccess: () => {
      setGlbToast({
        open: true,
        message: "Your ticket has been submitted",
        severity: "success",
      });
      //RemoveAuthUser();
    },
    onError: (error) => {
      console.log("Error caught by mutation:", error);
      setGlbToast({
        open: true,
        message: "Something went wrong",
        severity: "error",
      });
    },
  });

  return { registerMutation, loginMutation, logoutMutation, newTicketMutation };
}

export default Mutations;
