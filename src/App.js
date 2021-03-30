import "./App.css";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Navigation />
            <Checkout />
          </Route>

          <Route path="/login">
            <h2> login page</h2>
          </Route>
          <Route path="/">
            <Navigation />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
