import React from "react";
import Header from "./Header";
import Home from "./Home";
import Images from "./Images";

import Ingenuity from "./Ingenuity";
import Whymars from "./Whymars";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/raw-images" exact component={Images} />
        <Route path="/ingenuity" exact component={Ingenuity} />

        <Route path="/whymars" exact component={Whymars} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
