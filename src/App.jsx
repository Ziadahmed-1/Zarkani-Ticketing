import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import Layout from "./Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundry";
import Toast from "./components/ui/Toast";
import { use } from "react";
import useUIStore from "./zustand/UIStore";

function App() {
  const queryClient = new QueryClient();
  const glbToast = useUIStore((state) => state.glbToast);
  const setGlbToast = useUIStore((state) => state.setGlbToast);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Layout />
          <Toast
            open={glbToast.open}
            message={glbToast.message}
            severity={glbToast.severity}
            onClose={() =>
              setGlbToast({ open: false, message: "", severity: "" })
            }
          />
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
