import React, { useState } from "react";
import "./Login.scss";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
  };

  return (
    // <div className="login-main-content">
    //   <div className="body-contain">
    //     <div className="login-header">
    //       <p>Login</p>
    //     </div>
    //     <div className="form-container">
    //       <form>
    //         <div className="form-control">
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div className="form-control">
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <div
    //           className="forget_password_container"
    //           // onClick={onClickForgotHandler}
    //         >
    //           Forgot password
    //         </div>
    //         <div className="login-button">
    //           <button onClick={handleLogin}>Login</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="login-main-content">
      <div class="well">
        <h2>Login</h2>
        <form class="material-form">
          <div class="form-group">
            <input type="email" class="form-control" />
            <label>Email</label>
            <span class="input-border"></span>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" />
            <label>Password</label>
            <span class="input-border"></span>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            Submit
          </button>
          <p class="helper-text">
            Don't have an account? <a href="#">Sign up</a> here.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
