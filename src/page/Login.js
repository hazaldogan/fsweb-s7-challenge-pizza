import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="pizza" id="order-pizza">
        ACIKTIM
      </Link>
    </div>
  );
};

export default Login;
