/** @format */

import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const history = useHistory();

  const addEmail = (e) => {
    setErrorEmail("");
    setErrorMsg("");
    setEmail(e.target.value);
  };

  const addPassword = (e) => {
    setErrorPass("");
    setErrorMsg("");
    setPassword(e.target.value);
  };

  const loginUser = (e) => {
    e.preventDefault();
    let errorFound = false;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pwdformat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

    if (email) {
      if (!email.match(mailformat)) {
        errorFound = true;
        setErrorEmail("Email is not valid");
      }
    }

    if (!email) {
      errorFound = true;
      setErrorEmail("Please enter a valid email address");
    }
    if (password) {
      if (!password.match(pwdformat)) {
        errorFound = true;
        setErrorPass(
          "Password must contain at least 8 characters, including UPPER/lowercase and atleast one number and a special character"
        );
      }
    }
    if (!password) {
      errorFound = true;
      setErrorPass("Please enter the password");
    }
    if (!errorFound) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("./home");
          console.log(auth);
        })
        .catch((error) => setErrorMsg(error.message));
    }
  };

  const createAccount = () => {
    let errorFound = false;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pwdformat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

    if (email) {
      if (!email.match(mailformat)) {
        errorFound = true;
        setErrorEmail("Email is not valid");
      }
    }

    if (!email) {
      errorFound = true;
      setErrorEmail("Please enter a valid email address");
    }
    if (password) {
      if (!password.match(pwdformat)) {
        errorFound = true;
        setErrorPass(
          "Password must contain at least 8 characters, including UPPER/lowercase and atleast one number and a special character"
        );
      }
    }
    if (!password) {
      errorFound = true;
      setErrorPass("Please enter the password");
    }
    if (!errorFound) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("./home");
        })
        .catch((error) => setErrorMsg(error.message));
    }
  };

  return (
    <div className="form-container ">
      <div className="container border p-5">
        <form onSubmit={(e) => loginUser(e)}>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => addEmail(e)}
            />
            <div class="form-text text-danger">{errorEmail}</div>
          </div>
          <div class="mb-2">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => addPassword(e)}
            />
            <div class="form-text text-danger">{errorPass}</div>
          </div>

          <button type="submit" class="btn btn-success col-12 mt-2">
            LOGIN
          </button>
          <div class="form-text text-danger">{errormsg}</div>
        </form>
        <div class="form-text mt-3">New Here?</div>
        <button
          type="button"
          class="btn btn-success col-12"
          onClick={createAccount}
        >
          CREATE YOUR ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default Login;
