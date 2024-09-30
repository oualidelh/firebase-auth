import SignUp from "./account/SignUp";
import Login from "./account/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
