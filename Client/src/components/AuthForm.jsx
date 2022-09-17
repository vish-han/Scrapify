import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function AuthForm({
  handleSubmit,
  register,
  isDealer,
  isAdmin,
  userData,
  handleChange,
  setIsAdmin,
}) {
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="email"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Your Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        placeholder="Enter Password"
        value={userData.password}
        onChange={handleChange}
      />
      {register ? (
        <>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="address"
            placeholder={isDealer ? "Office Address" : "Address"}
            value={userData.location}
            onChange={handleChange}
          />
          <input
            type="number"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone"
            placeholder="Phone number"
            value={userData.phone}
            onChange={handleChange}
          />
          {isDealer ? (
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label={`Are You Admin? : ${!isAdmin ? "Yes" : "No"}`}
                value={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
            </FormGroup>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      <button className="btn px-5" type="submit">
        {register ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
}
