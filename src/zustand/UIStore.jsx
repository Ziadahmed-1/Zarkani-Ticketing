import { create } from "zustand"; // ✅ Correct

const useUIStore = create((set) => ({
  // Example state
  isSidebarOpen: true,
  isDarkMode: false,
  ticketsFilter: {
    status: "All",
    sort: "Newest",
  },
  // Example actions
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setTicketsFilter: (filter) => set(() => ({ ticketsFilter: filter })),
}));

export default useUIStore;
