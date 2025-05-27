import { create } from "zustand"; // ✅ Correct

const useUIStore = create((set) => ({
  // Example state
  isSidebarOpen: true,
  isDarkMode: false,
  ticketsFilter: {
    status: "All",
    sort: "Newest",
  },
  project: null,
  branch: null,
  authToast: {
    open: false,
    message: "",
    severity: "",
  },
  authUser: JSON.parse(localStorage.getItem("user")) || null,
  // Example actions
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      document.documentElement.setAttribute(
        "data-theme",
        newMode ? "dark" : "light"
      );
      return { isDarkMode: newMode };
    }),
  setTicketsFilter: (filter) => set(() => ({ ticketsFilter: filter })),
  setProject: (project) => set(() => ({ project })),
  setBranch: (branch) => set(() => ({ branch })),
  setAuthToast: (toast) => set(() => ({ authToast: toast })),
  setAuthUser: (user) => set(() => ({ authUser: user })),
}));

export default useUIStore;
