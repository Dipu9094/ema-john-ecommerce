import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form action="" onSubmit="">
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="enter your email"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="enter your password"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="re-enter your password"
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <p>
                    Already have an Account? <Link to="/login">Log in</Link>
                </p>
                <div>---------------or---------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
