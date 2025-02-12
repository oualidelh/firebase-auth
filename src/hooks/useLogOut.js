import { signOut } from "firebase/auth";
import { auth } from "../utils/Auth";

export const useLogout = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign up:", error.message);
    }
  };

  return { logout };
};
