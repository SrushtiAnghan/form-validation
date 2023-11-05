import "./App.css";
import Login from "./components/Loginflow/Login";
import Signup from "./components/Loginflow/Signup";

function App() {
  return (
    <>
      <Login />
      {/* <Signup /> */}
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
