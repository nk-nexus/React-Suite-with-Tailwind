import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "rsuite/dist/rsuite-no-reset.min.css";

import router from "./routes"
import "./index.css";
import { AuthProvider } from "@contexts/useAuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provide Auth to Checking Auth Context */}
    <AuthProvider>
      {/* Every Routes Place Here */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
 