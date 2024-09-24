import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoginProvider } from "./context/loginContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoginProvider>
        <App />
      </LoginProvider>
    </QueryClientProvider>
  // {/* </React.StrictMode> */}
);
