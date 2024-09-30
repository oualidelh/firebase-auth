import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { AuthContextProvider } from "./context/authContext";
import { GuidesContextProvider } from "./context/GuideContext";
import { UserInfoContextProvider } from "./context/userInfoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserInfoContextProvider>
        <GuidesContextProvider>
          <App />
        </GuidesContextProvider>
      </UserInfoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
