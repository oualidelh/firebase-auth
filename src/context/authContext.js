import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../utils/Auth";
import { onAuthStateChanged } from "firebase/auth";

// Create context
export const AuthContext = createContext();

// Reducer to handle user login/logout state
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// Context provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const [loading, setLoading] = useState(true); // To handle initial loading state

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user }); // Update state if user is logged in
      } else {
        dispatch({ type: "LOGOUT" }); // Update state if user is logged out
      }
      setLoading(false); // Once we know the auth state, stop loading
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {!loading && children} {/* Only render children when not loading */}
    </AuthContext.Provider>
  );
};
