import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import KidCheckInOut from "./KidCheckInOut";
import QrGenerator from "./QrGenerator";
import QrScanner from "./QrScanner";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "kid-checkin-out", element: <KidCheckInOut /> },
      { path: "qr-generator", element: <QrGenerator /> },
      { path: "qr-scanner", element: <QrScanner /> },
    ],
  },
]);
