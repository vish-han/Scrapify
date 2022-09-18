import React, { useContext, useState } from "react";
import AuthForm from "../components/AuthForm";
import AuthSwitch from "../components/AuthSwitch";
import axios from "axios";
import { Store } from "../store";
import { useNavigate } from "react-router-dom";
import Base_URL from "../axios";
import { toast } from "react-toastify";
import Trash from "../assets/trash.jpg";

export default function Auth() {
  const { state, dispatch } = useContext(Store);
  const navigate = useNavigate();

  const [isDealer, setIsDealer] = useState(false);
  const [register, setRegister] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    localAdminId: "",
    userkind: "h",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (register) {
        if (
          userData.name.length == 0 ||
          userData.email.length == 0 ||
          userData.password.length == 0 ||
          userData.phone.length == 0 ||
          userData.address.length == 0 ||
          userData.userkind.length == 0
        ) {
          toast.error("Please fill all the fields");
          return;
        }
        if (isDealer) userData.userkind = "s";

        const { data } = await axios.post(
          `${Base_URL}/auth/register`,
          userData
        );
        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({ type: "SIGN_IN", payload: data });
        toast.success('Successfully registered into the app')
        navigate("/");
      } else {
        if (userData.email.length == 0 || userData.password.length == 0) {
          toast.error("Please fill all the fields");
          return;
        }
        const { data } = await axios.post(`${Base_URL}/auth/login`, userData);
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({ type: "SIGN_IN", payload: data });
        toast.success('Successfully logged into the app')
        navigate("/");
      }
    } catch (err) {
      toast.error('Some error occured, Please try again')
    }
    // reset();
  };

  const reset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      localAdminId: "",
    });
  };
  return (
    <div className="box flex flex-row-reverse items-center justify-between my-36">
         <img src={Trash} alt=""  className="w-1/2"/> 
      <div className="flex flex-col gap-3 lg:w-[40vw] border-4 p-4 rounded-xl">
        {/* top switch */}
        <AuthSwitch isDealer={isDealer} setIsDealer={setIsDealer} />
        {/* form */}
        <AuthForm
          handleSubmit={handleSubmit}
          register={register}
          isDealer={isDealer}
          isAdmin={isAdmin}
          userData={userData}
          handleChange={handleChange}
          setIsAdmin={setIsAdmin}
        />
        {/* register or login */}
        <div>
          {register ? (
            <div>
              <p>
                By signing up, you agree to the{" "}
                <span className="text-siteBlue hover:underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-siteBlue hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
              <p className="my-2">
                Already registered?{" "}
                <span
                  className="text-siteBlue hover:underline cursor-pointer"
                  onClick={() => setRegister(!register)}
                >
                  {" "}
                  Log In
                </span>
              </p>
            </div>
          ) : (
            <p>
              Don't have an account?
              <span
                className="text-siteBlue hover:underline cursor-pointer"
                onClick={() => setRegister(!register)}
              >
                {" "}
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
