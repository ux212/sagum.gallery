// Import Libraries
import { Route, Switch, withRouter } from "react-router-dom";

// Import Component
import { Header } from "components/Header";

// Import Pages
import { About, Main, Work } from "page";

const App = () => {
  return (
    <>
      <Switch>
        <Header />
      </Switch>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default withRouter(App);
