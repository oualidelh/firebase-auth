import { createContext, useEffect, useReducer } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { db } from "../utils/Auth";

export const GuidesContext = createContext();

export const guidesReducer = (state, action) => {
  switch (action.type) {
    case "SET_GUIDES":
      return {
        guides: action.payload,
      };
    case "CREATE_GUIDE":
      return {
        guides: [action.payload, ...state.guides],
      };
    case "DELETE_GUIDE":
      return {
        guides: state.guides.filter((g) => g.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const GuidesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(guidesReducer, { guides: [] });
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(collection(db, "guides"), (snapshot) => {
        const guidesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        dispatch({ type: "SET_GUIDES", payload: guidesData });
      });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <GuidesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GuidesContext.Provider>
  );
};
