import React from "react";
import ReactDOMClient from "react-dom/client";
import { Aaa } from "./screens/Aaa";
import FormPopup from "./components/ButtonPrimary/FormPopup.js";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Aaa />);

ReactDOMClient.createRoot(document.getElementById("app")).render(
  <>
    <FormPopup />
    <Aaa />
  </>,
);