import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import GetAccount from "../Routes/GetAccount";
import Home from "../Routes/Home";
import Post from "../Routes/Post";
import Page from "../Routes/Page";
import Article from "../Routes/Article";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/:page/:code" component={Page} />
    <Route path="/post/:code" component={Post} />
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
