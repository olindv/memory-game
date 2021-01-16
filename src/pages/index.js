import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main/Main";
import Game from "./Game/Game";

function View() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/game" component={Game} />
      </Switch>
    );
  }
export default View;