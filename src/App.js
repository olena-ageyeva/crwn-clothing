import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Page = ({
  match: {
    params: { name },
  },
}) => (
  <div>
    <h1>{name.toUpperCase()} PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:name" component={Page} />
      </Switch>
    </div>
  );
}

export default App;
