import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/homepage/Home";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
