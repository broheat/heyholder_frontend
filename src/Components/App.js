import GlobalStyles from "../Styles/GlobalStyles";
import { useReactiveVar } from "@apollo/client";
import AppRouter from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isLoggedInVar } from "../Apollo/LocalState";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <AppRouter isLoggedIn={isLoggedIn} />
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
}

export default App;
