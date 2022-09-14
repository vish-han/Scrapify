import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";

function App() {
  Aos.init();
  return (
    <div className="App font-poppins">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;
