import React, { useState } from "react";
import "./Signup.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Add signup logic here
  };

  return (
    // <div>
    //   <h2>Sign up</h2>
    //   <form>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button onClick={handleSignup}>Sign up</button>
    //   </form>
    // </div>
    <div className="login-main-content">
      <div class="well">
        <h2>SIGN UP</h2>
        <form class="material-form">
          <div class="form-group">
            <input type="email" class="form-control" />
            <label>Your Email</label>
            <span class="input-border"></span>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" />
            <label>Username</label>
            <span class="input-border"></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" />
            <label>Password</label>
            <span class="input-border"></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" />
            <label>Confirm Password</label>
            <span class="input-border"></span>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            SIGN UP
          </button>
          <p class="helper-text">
            Already have an account? <a href="#">Login.</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
