import { useReactiveVar } from "@apollo/client";
import AppRouter from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { isLoggedInVar } from "../Apollo/LocalState";
import HeaderContent from "../Components/HeaderContent";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <div>
      <Router>
        {isLoggedIn && <HeaderContent />}
        <div className="d-flex align-items-stretch">
          <AppRouter isLoggedIn={isLoggedIn} />
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </div>
      </Router>
    </div>
  );
};
