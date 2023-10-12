import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../page/Login";
import Order from "../page/Order";
import OrderDetail from "../page/OrderDetail";
import NotFound from "../page/NotFound";

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/pizza">
          <Order />
        </Route>
        <Route exact path="/siparis-alindi">
          <OrderDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
