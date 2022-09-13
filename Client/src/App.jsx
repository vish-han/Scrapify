import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";

function App() {
  Aos.init();
  return (
<<<<<<< HEAD
    <div className="App">
    fdadsfds
=======
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
>>>>>>> 26909fac1250fbaf64e4e8a63eff2dc6c194ecdd
    </div>
  );
}

export default App;
