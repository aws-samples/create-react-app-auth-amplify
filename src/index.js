import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppCopy from "./AppCopy";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppCopy />
  </StrictMode>
);
