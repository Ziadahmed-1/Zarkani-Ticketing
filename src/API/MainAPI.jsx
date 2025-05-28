import axiosInstance from "./axios";

export function ProjectsList() {
  return axiosInstance
    .get("/api/GeneralSelection/ProjectList")
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Projects list failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Projects list error:", err);
      throw new Error(err.message || "Projects list failed"); // This is important for react-query to catch the error
    });
}
export function BranchList(projectId) {
  return axiosInstance
    .get(`/api/GeneralSelection/BranchList?projectId=${projectId}`)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Branches list failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Branches list error:", err);
      throw new Error(err.message || "Branches list failed"); // This is important for react-query to catch the error
    });
}
export function TicketStatusList() {
  return axiosInstance
    .get(`/api/GeneralSelection/StatusList`)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Status list failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Status list error:", err);
      throw new Error(err.message || "Status list failed"); // This is important for react-query to catch the error
    });
}
export function AllTicketsList() {
  return axiosInstance
    .get(`/api/Tiket/AllList`)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "All Tickets list failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("All Tickets list error:", err);
      throw new Error(err.message || "All Tickets list failed"); // This is important for react-query to catch the error
    });
}
export function ProjectTicketsList(projectId) {
  return axiosInstance
    .get(`/api/Tiket/ProjectList?ProjectID=${projectId}`)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Tickets list failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Tickets list error:", err);
      throw new Error(err.message || "Tickets list failed"); // This is important for react-query to catch the error
    });
}
export function AddNewTicket(data) {
  return axiosInstance
    .post(`/api/Tiket`, data)
    .then((res) => {
      // Check if the backend included a failure flag
      if (res.status !== 200) {
        throw new Error(res.data.message || "Adding Ticket failed");
      }
      return res.data;
    })
    .catch((err) => {
      console.error("Adding Ticket error:", err);
      throw new Error(err.message || "Adding Ticket failed"); // This is important for react-query to catch the error
    });
}
