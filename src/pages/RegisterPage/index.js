/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./registerPage.scss";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../actions/authen";
import { Link } from "react-router-dom";

import Authen from "../../api/authen";

const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const history = useHistory();
  const register = () => {
    Authen.register({
      email,
      password,
      username,
    }).then((res) => {
      setUserProcess(res);
    });
  };

  const setUserProcess = async (res) => {
    await localStorage.setItem("token", res.data.data.token);
    await props.setCurrentUser();
    history.push("/top");
  };
  return (
    <div className="register-page-wrapper">
      <div className="register-form-box">
        <h1 className="title">新規登録</h1>
        <div className="form">
          <div className="text-field-wrapper">
            <TextField
              className="text-field"
              label="username"
              variant="outlined"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
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
            <Button className="register-button" onClick={() => register()} size="large" variant="contained" color="primary">
              登録
            </Button>
          </div>
          <Link to="/">ログイン</Link>
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

export default connect(null, mapDispatchToProps)(RegisterPage);
