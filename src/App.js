import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ItemListPage from "./pages/ItemListPage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <div id="page-body">
        <Router>
          <Switch>
            <Route path="/" component={ItemPage} exact />
            <Route path="/items/:id" component={ItemListPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
