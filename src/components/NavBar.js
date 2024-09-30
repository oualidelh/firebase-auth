import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogOut";

const NavBar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const logOut = () => {
    logout();
  };
  return (
    <nav className="z-depth-0 grey lighten-4">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          <img
            src="https://img.icons8.com/external-flat-juicy-fish/452/external-gaming-controller-video-games-flat-flat-juicy-fish.png"
            alt="Logo"
            style={{ width: "90px", marginTop: "10px" }}
          />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {user ? (
            <>
              <li className="logged-in">
                <a
                  href="#"
                  className="grey-text modal-trigger"
                  data-target="modal-account"
                >
                  Account
                </a>
              </li>
              <li className="logged-in">
                <a href="#" className="grey-text" id="logout" onClick={logOut}>
                  Logout
                </a>
              </li>
              <li className="logged-in">
                <a
                  href="#"
                  className="grey-text modal-trigger"
                  data-target="modal-create"
                >
                  Create Guide
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="logged-out">
                <a
                  href="#"
                  className="grey-text modal-trigger"
                  data-target="modal-login"
                >
                  Login
                </a>
              </li>
              <li className="logged-out">
                <a
                  href="#"
                  className="grey-text modal-trigger"
                  data-target="modal-signup"
                >
                  Sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
