import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../reducers/authen";

function PrivateRoute(props) {
  const isAuth = useSelector(isAuthSelector);
  return isAuth ? <Route {...props} /> : <Redirect to="/" />;
}

export default PrivateRoute;
