import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>login</h2>
                <form action="" onSubmit="">
                    <input type="email" name="" id="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                </form>
                <p>
                    new to ema-john? <Link to="/register">Create Account</Link>
                </p>
                <div>.............or.............</div>
                <button className="btn-regular">Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;
