import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import Auth from "./pages/Auth";
import Info from "./pages/Info";
import Navbar from "./components/Navbar";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Loading from "./pages/Loading";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import Transaction from "./pages/Transaction";
import DealerProfile from "./pages/DealerProfile";

import CreateDeal from "./pages/CreateDeal";
import DOD from "./pages/DOD";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Success from "./pages/Success";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  document.title = 'Scrapify'

  return (
    <>
      <div className="App font-poppins ">
        <Navbar />
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Auth />} />
          <Route path="info" element={<Info />} />
          <Route path="deal" element={<Deals />} />
          <Route path="loading" element={<Loading />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="dod" element={<DOD />} />
          
          <Route
            path="createDeal/:id"
            element={<CreateDeal />}
          />
          <Route path="dealerprofile/:id" element={<DealerProfile />} />
          <Route path="success" element={<Success/>}/>
          <Route path="rewards" element={<Rewards />} />
          <Route path="transactions" element={<Transaction />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
