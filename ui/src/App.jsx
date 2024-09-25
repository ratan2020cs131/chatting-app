import "./index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Components from "screens/Components";
import Login from "screens/login-signup/Login";
import Signup from "screens/login-signup/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Components />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
