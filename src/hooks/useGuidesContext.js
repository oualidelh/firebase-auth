import { GuidesContext } from "../context/GuideContext";
import { useContext } from "react";

export const useGuidesContext = () => {
  const context = useContext(GuidesContext);

  if (!context) {
    throw Error(
      "useGuidesContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
