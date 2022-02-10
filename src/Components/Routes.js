import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import GetAccount from "../Routes/GetAccount";
import Page from "../Routes/Page";
import Post from "../Routes/Post";
import Article from "../Routes/Article";
import Home from "../Routes/Home";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/board/:code/" component={Page} />
    <Route path="/getaccount" component={GetAccount} />
    <Route path="/post/:code" component={Post} />
    <Route path="/article/:code/:id" component={Article} />
    <Redirect from="*" to="/home" component={Home} />
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
