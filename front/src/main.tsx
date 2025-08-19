import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
