import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import GetAccount from "../Routes/GetAccount";
import Home from "../Routes/Home";
import Post from "../Components/Post";
import Board from "../Components/Board";
import Research from "../Components/Research";
import Propose from "../Components/Propose";
import Main from "../Components/Main";
import Article from "../Components/Article";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/post/:code" component={Post} />
    <Route path="/research/:code" component={Research} />
    <Route path="/propose/:code" component={Propose} />
    <Route path="/board/:code" component={Board} />
    <Route path="/main/:code" component={Main} />
    <Route path="/article/:code/:id" component={Article} />
    <Route path="/getaccount" component={GetAccount} />
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
