import React from "react";
import { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [feilds, setfeilds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feilds.username);
    console.log(feilds.password);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfeilds({ ...feilds, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="background"></div>
          <div className="container">
            <div className="login-text neonText">LOGIN</div>
            <div className="button">
              <input
                className="input"
                type="email"
                name="username"
                placeholder="Your Email"
                autoComplete="off"
                value={feilds.username}
                onChange={handleInput}
              />
            </div>
            <div className="button">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={feilds.password}
                onChange={handleInput}
              />
            </div>
            <button
              className="button login fill"
              type="submit"
              style={{
                zIndex: 2,
                borderRadius: "0",
                width: "10vw",
                border: "none",
              }}
            >
              <div
                className="button login fill"
                style={{
                  position: "absolute",
                  height: "48px",
                  minWidth: "248px",
                  width: "5vw",
                  margin: "2px",
                  borderRadius: "0",
                  border: "none",
                  backgroundColor: "#87cefa",
                }}
              >
                <div style={{ zIndex: 1, color: "rgb(2 1 1)" }}>LOGIN</div>
              </div>
            </button>
            <div className="signup">
              Don’t have an account?
              <Link
                to="/signup"
                style={{
                  marginLeft: "10px",
                  color: "#87cefa",
                  cursor: "pointer",
                }}
              >
                Sign Up.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
