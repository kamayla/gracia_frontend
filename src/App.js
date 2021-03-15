import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TopPage from "./pages/TopPage";
import DearsPage from "./pages/DearsPage";
import { Switch, BrowserRouter } from "react-router-dom";
import GuestRoute from "./router/GuestRoute";
import PrivateRoute from "./router/PrivateRoute";
import HeaderBar from "./components/HeaderBar";
import SideBar from "./components/SideBar";

import { useSelector } from "react-redux";
import { isAuthSelector } from "./reducers/authen";

import "./App.scss";
function App() {
  const isAuth = useSelector(isAuthSelector);
  return (
    <BrowserRouter>
      <div className={isAuth ? "app-wrapper-auth" : "app-wrapper"}>
        <HeaderBar />
        {isAuth && <SideBar />}
        <Switch>
          <GuestRoute exact path="/" component={LoginPage} />
          <GuestRoute exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/top" component={TopPage} />
          <PrivateRoute exact path="/dears" component={DearsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
