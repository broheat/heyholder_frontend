import { useReactiveVar } from "@apollo/client";
import AppRouter from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isLoggedInVar } from "../Apollo/LocalState";
import "./App.css";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <div className="d-flex align-items-stretch">
      <div className="page-holder align-items-center bg-gray-100">
        <Router>
          <AppRouter isLoggedIn={isLoggedIn} />
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </div>
    </div>
  );
}

export default App;
