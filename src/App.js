import "./App.css";
import Loginflow from "./components/Loginflow/Loginflow";
import Register from "./components/Loginflow/Register";
import Login from "./components/registerAndLogin/Login";
import Signup from "./components/registerAndLogin/Signup";


function App() {
  return (
    <>
      {/* <Login />
      <Signup/> */}
      {/* <Loginflow/> */}
      <Register/>
    </>
  );
}

export default App;

// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./FormValidator/Login";
// import Signup from "./FormValidator/Signup ";

// function App() {
//   return (
//     <Router>
//       <Route exact path="/login" element={<Login />} />
//       <Route exact path="/signup" element={<Signup />} />
//     </Router>
//   );
// }

// export default App;
