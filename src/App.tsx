import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import "./global.scss";
import AppRoutes from "./routes";

export const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
