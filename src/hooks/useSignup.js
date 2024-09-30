import { createUserWithEmailAndPassword } from "firebase/auth";
import M from "materialize-css/dist/js/materialize.min.js";
import { auth, db } from "../utils/Auth";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signUp = async (email, password, bio) => {
    setIsLoading(true);
    setError(null);

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCred.user.uid), {
        bio: bio,
      });
      const modalInstance = M.Modal.getInstance(
        document.getElementById("modal-signup")
      );
      modalInstance.close();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.error("Error during login:", error.message);
    }
  };

  return { signUp, isLoading, error };
};
