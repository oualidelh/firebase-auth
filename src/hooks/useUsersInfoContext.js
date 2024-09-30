import { useContext } from "react";
import { userInfoContext } from "../context/userInfoContext";

export const useUsersInfoContext = () => {
  const context = useContext(userInfoContext);

  if (!context) {
    throw Error(
      "useUsersInfoContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
