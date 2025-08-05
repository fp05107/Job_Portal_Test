import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement as HTMLElement);
  root.render(<App />);
} else {
  throw new Error("Root element not found");
}
