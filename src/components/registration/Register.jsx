import React, { useState } from "react";
import "./register.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const [action, setAction] = useState("");

  const registerlink = () => {
    setAction(" active");
  };

  const loginlink = () => {
    setAction(" ");
  };
  return (
    <div className={`wrapper ${action}`}>
      {/* -------------Login ----------------s */}
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Usename" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerlink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/*  ----------Register -------- */}
      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Usename" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
            {/* <a href="#">Forgot password?</a> */}
          </div>

          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginlink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
