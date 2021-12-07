import React from "react";

import Home from "./components/home/Home";
import NavigationBar from "./components/navigationBar/NavigationBar";
import { Switch, Route } from "react-router-dom";
import LiveScorePage from "./components/liveScorePage/LiveScorePage";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/live-score" component={LiveScorePage} exact />
      </Switch>
    </>
  );
}

export default App;
