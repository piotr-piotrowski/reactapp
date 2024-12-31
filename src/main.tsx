import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { dataStore } from "./data/dataStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={dataStore}>
      <App />
    </Provider>
  </StrictMode>
);
