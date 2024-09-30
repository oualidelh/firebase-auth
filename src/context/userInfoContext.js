import { createContext, useEffect, useReducer } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../utils/Auth";

export const userInfoContext = createContext();

export const usersReducer = (state, action) => {
  if (action.type === "SET_USER") {
    return {
      userData: action.payload,
    };
  }

  return state; // Return the current state if the action type doesn't match
};

export const UserInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, { userData: null });
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      // Reference the specific document for the logged-in user
      const userDocRef = doc(db, "users", user.uid);
      console.log("userdocref", userDocRef);

      // Listen for real-time updates on the user's document
      const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = {
            email: user.email,
            id: docSnapshot.id,
            ...docSnapshot.data(),
          };

          // Dispatch the user's data to the state
          dispatch({ type: "SET_USER", payload: userData });
        } else {
          console.log("No such document!");
        }
      });

      // Clean up the listener when the component unmounts or user changes
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <userInfoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userInfoContext.Provider>
  );
};
