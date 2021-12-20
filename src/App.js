import { Routes, Route } from "react-router-dom";

import Sample from "./screens/sample/Sample";
import Login from "./screens/login/Login";
import SignUp from "./screens/sign-up/SignUp";
import Forgot from "./screens/forgot/Forgot";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Sample />} />,
        <Route path="/login" element={<Login />} />,
        <Route path="/signup" element={<SignUp />} />,
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
