import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/app/provaiders/ThemeProvader";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./appStore";
import '@/shared/index.css'
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
      <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
