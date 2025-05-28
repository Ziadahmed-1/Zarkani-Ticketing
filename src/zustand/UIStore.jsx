import { create } from "zustand"; // ✅ Correct

const useUIStore = create((set) => ({
  // Example state
  isSidebarOpen: true,
  isDarkMode: false,
  ticketsFilter: {
    status: {},
    sort: {},
  },
  selectedProject: null,
  selectedBranch: null,
  glbToast: {
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
  setSelectedProject: (selectedProject) => set(() => ({ selectedProject })),
  setSelectedBranch: (selectedBranch) => set(() => ({ selectedBranch })),
  setGlbToast: (toast) => set(() => ({ glbToast: toast })),
  setAuthUser: (user) => set(() => ({ authUser: user })),
}));

export default useUIStore;
