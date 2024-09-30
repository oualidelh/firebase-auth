import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import M from "materialize-css/dist/js/materialize.min.js"; // Import Materialize
import { useUsersInfoContext } from "../hooks/useUsersInfoContext";

const Account = () => {
  const { user } = useAuthContext();
  const { userData } = useUsersInfoContext();
  console.log("account userdata", userData.email);

  // Initialize the modal when the component mounts
  useEffect(() => {
    const modalElement = document.getElementById("modal-account");
    M.Modal.init(modalElement);
  }, []);

  return (
    <div id="modal-account" className="modal">
      <div className="modal-content center-align">
        <h4>Account details</h4>
        <br />
        <div className="account-details">
          {user ? (
            <div>
              <h5> You are logged in as {userData.email}</h5>
              <p>Bio: {userData.bio}</p>
            </div>
          ) : (
            "No user logged in"
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
