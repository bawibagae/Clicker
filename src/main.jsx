import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"./market.jsx"}>상점</Link>
        </li>
        <li>
          <Link to={"./setting.jsx"}>설정</Link>
        </li>
        <li>
          <Link to={"./login.jsx"}>로그인</Link>
        </li>
      </ul>
    </BrowserRouter>
  </StrictMode>,
);
