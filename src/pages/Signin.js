import React from "react";
import NavBar from "./NavBar";

const Signin = () => {
  return (
    <div className="signin_page">
      <NavBar />
      <div className="container-si">
        <div className="cont-container">
          <span className="txt">Sign-in</span>
          <div className="input-name">
            <input className="input" type="email" required="requried" />
            <label className="username">Email</label>
            <br />
            <br />
          </div>
          <div className="input-name">
            <input className="input" type="password" required="requried" />
            <label className="username">Password</label>
            <br />
            <br />
          </div>
          <input className="submit" type="submit" value="Sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
