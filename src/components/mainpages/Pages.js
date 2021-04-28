import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// componenentes
import Introduccion from './introduccion/Introduccion'
import MainPage from './mainPage/MainPage'

function Pages() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/introduccion" exact component={Introduccion} />
      </Switch>
    </>
  );
}

export default Pages;
