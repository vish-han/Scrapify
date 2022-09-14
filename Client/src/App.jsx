import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import Auth from "./pages/Auth";
import Info from "./pages/Info";
import Navbar from "./components/Navbar";

function App() {
  Aos.init();
  return (
    <div className="App font-poppins">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Auth/>} />
<Route path="info" element={<Info/>} />
      </Routes>
    </div>
  );
}

export default App;
