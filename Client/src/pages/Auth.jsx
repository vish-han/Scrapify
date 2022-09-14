import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import AuthSwitch from "../components/AuthSwitch";
import Navbar from "../components/Navbar";

export default function Auth() {
  const [isDealer, setIsDealer] = useState(false);
  const [register, setRegister] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    paasword: "",
    confirmPassword: "",
    phone: "",
    address: "",
    localAdminId: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
  };

  const reset = () => {
    setUserData({
      name: "",
      email: "",
      paasword: "",
      confirmPassword: "",
      phone: "",
      address: "",
      localAdminId: "",
    });
  };
  return (
    <div className="box flex items-center justify-center my-20">
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
