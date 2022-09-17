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
import Timeline from "./pages/timeline";
import CreateDeal from "./pages/CreateDeal";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  Aos.init();
  return (
    <>
      <div className="App font-poppins ">
        <Navbar />
        <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Auth />} />
          <Route path="info" element={<Info />} />
          <Route path="deals" element={<Deals />} />
          <Route path="loading" element={<Loading></Loading>} />
          <Route path="profile" element={<Profile></Profile>} />
          <Route path="deals/dealerprofile/timeline" element={<Timeline />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route
            path="deals/dealerprofile/deals/dealerprofile/createDeal"
            element={<CreateDeal></CreateDeal>}
          />
          <Route path="deals/dealerprofile" element={<DealerProfile />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="transactions" element={<Transaction />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
