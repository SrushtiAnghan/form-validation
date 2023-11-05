import React, { useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  const [feilds, setfeilds] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfeilds({ ...feilds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feilds.password == feilds.confirmPassword) {
      console.log(feilds.email);
      console.log(feilds.username);
      console.log(feilds.password);
      console.log(feilds.confirmPassword);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="background"></div>
          <div className="container">
            <div className="login-text neonText">SIGN UP</div>
            <div className="button" style={{ marginTop: "40px" }}>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                value={feilds.email}
                onChange={handleInput}
              />
            </div>
            <div className="button">
              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                value={feilds.username}
                onChange={handleInput}
              />
            </div>
            <div className="button" style={{ position: "relative" }}>
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
            <div
              className="button"
              style={{
                borderColor: `${
                  feilds.password == feilds.confirmPassword
                    ? "#40e9f1"
                    : "rgb(255, 72, 72)"
                }`,
              }}
            >
              <input
                className="input"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={feilds.confirmPassword}
                onChange={handleInput}
              />
            </div>
            <div
              className="smol-txt"
              style={{
                display: `${
                  feilds.password == feilds.confirmPassword ? "none" : "inline"
                }`,
              }}
            >
              password's dont match
            </div>
            <button
              className="button login fill"
              type="submit"
              style={{
                borderRadius: "0",
                width: "10vw",
                border: "none",
                position: "relative",
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
                <div style={{ zIndex: 1, color: "rgb(2 1 1)" }}>SIGN UP</div>
              </div>
            </button>
            <div className="signup">
              Already have an account?
              <Link
                to="/login"
                style={{
                  marginLeft: "10px",
                  color: "#87cefa",
                  cursor: "pointer",
                }}
              >
                Log In.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
