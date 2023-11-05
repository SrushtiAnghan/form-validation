// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import "./App.css";
// import Login from "./components/Loginflow/Login";
// import Signup from "./components/Loginflow/Signup";
// import WelcomePage from "./components/Loginflow/WelcomePage";

// function App() {
//   return createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/">
//         <Route index element={<WelcomePage />} />
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//         {/* <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} /> */}
//       </Route>
//     )
//   );
// }

// export default App;

import { Route } from "react-router-dom";
import Login from "./components/Loginflow/Login";
import Signup from "./components/Loginflow/Signup";

function App() {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
