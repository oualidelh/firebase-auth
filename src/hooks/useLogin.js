import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import M from "materialize-css/dist/js/materialize.min.js";
import { auth } from "../utils/Auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const modalInstance = M.Modal.getInstance(
        document.getElementById("modal-login")
      );
      modalInstance.close();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.error("Error during login:", error.message);
    }
  };

  return { login, isLoading, error };
};
