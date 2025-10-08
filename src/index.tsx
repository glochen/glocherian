import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./home";
import { HeroUIProvider } from "@heroui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroUIProvider>
      <HomePage />
    </HeroUIProvider>
  </React.StrictMode>
);
