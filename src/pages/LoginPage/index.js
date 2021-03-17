/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./loginPage.scss";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../actions/authen";
import { Link } from "react-router-dom";

import Authen from "../../api/authen";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = () => {
    Authen.login({
      email,
      password,
    }).then((res) => {
      setUserProcess(res);
    });
  };

  const setUserProcess = async (res) => {
    await localStorage.setItem("token", res.data.data.token);
    await props.setCurrentUser();
    history.push("/dears");
  };
  return (
    <div className="login-page-wrapper">
      <div className="login-form-box">
        <h1 className="title">ログイン</h1>
        <div className="form">
          <div className="text-field-wrapper">
            <TextField
              className="text-field"
              label="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-field-wrapper">
            <TextField
              className="text-field"
              label="password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-wrapper">
            <Button className="login-button" onClick={() => login()} size="large" variant="contained" color="primary">
              ログイン
            </Button>
          </div>
          <div className="button-wrapper">
            <Link to="register">新規登録</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: () => {
      dispatch(setCurrentUser());
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
