import "./index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Components from "screens/Components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Components />} />
    </Routes>
  );
};

export default App;
