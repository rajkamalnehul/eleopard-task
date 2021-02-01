/** @format */

import React from "react";

import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { auth } from "./firebase";

function Header() {
  const history = useHistory();

  const userSignOut = () => {
    auth.signOut().then((auth) => {
      history.push("./");
      console.log(auth);
    });
  };

  return (
    <div className="header">
      <nav className="navbar navbar-dark ">
        <div className="container">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <Avatar alt="profile" src={`https://picsum.photos/50/50`} />
          </Link>
          <div className="d-flex">
            <p className="text-white login-text" onClick={userSignOut}>
              Logout
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
