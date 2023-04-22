import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MailProvider } from "./context/MailContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MailProvider>
      <App />
    </MailProvider>
  </StrictMode>
);
