import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Add a simple test to see if React is working
console.log("main.tsx loaded");
console.log("Root element found:", rootElement);

try {
  console.log("Creating root...");
  const root = createRoot(rootElement);
  console.log("Root created, rendering App...");
  root.render(<App />);
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error rendering app:", error);
  console.error("Error stack:", error instanceof Error ? error.stack : 'No stack');
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: monospace; background: #ff0000; color: white;">
      <h1>Error Loading App</h1>
      <pre>${error instanceof Error ? error.message : String(error)}</pre>
      <pre>${error instanceof Error ? error.stack : ''}</pre>
    </div>
  `;
}
  