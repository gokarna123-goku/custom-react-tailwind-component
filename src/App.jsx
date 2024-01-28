import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrimaryBtn from "./components/Button/PrimaryBtn";
import SecondaryBtn from "./components/Button/SecondaryBtn";
import TertiaryBtn from "./components/Button/TertiaryBtn";
import Input from "./components/Form/Input";
import Textarea from "./components/Form/Textarea";
import Label from "./components/Label/Label";
import PrimaryLink from "./components/LinkBtn/PrimaryLink";
import SecondaryLink from "./components/LinkBtn/SecondaryLink";
import TertiaryLink from "./components/LinkBtn/TertiaryLink";
import Radio from "./components/Form/Radio";
import Checkbox from "./components/Form/Checkbox";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Router>
          <Navbar />
          <div className="w-full h-auto flex items-center justify-center gap-x-6 px-24 py-12">
            {/* Implementation of reusable components in one Login Card */}
            <div className="w-[30%] h-auto py-7 px-5 rounded-md border border-[#313131]/50 shadow-sm bg-transparent">
              <h1 className="text-2xl text-white font-semibold mb-6">
                Sign In
              </h1>
              <div className="w-full h-auto mb-4">
                <Label htmlfor={"email"}>Email</Label>
                <Input
                  id={"email"}
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="w-full h-auto mb-3">
                <Label htmlfor={"password"}>Password</Label>
                <Input
                  id={"password"}
                  type="password"
                  placeholder="Enter valid password"
                />
              </div>
              <div className="w-full h-auto flex items-center justify-between mb-4">
                <Checkbox
                  id="rememberme"
                  htmlfor="rememberme"
                  name="rememberme"
                  children="Remember Me"
                />
                <TertiaryLink className="font-normal text-sm">
                  Forgot Password?
                </TertiaryLink>
              </div>
              <PrimaryBtn className="w-full h-10 mb-4">Sign In</PrimaryBtn>
              {/* <SecondaryBtn className="w-full h-10 mb-4">Sign In</SecondaryBtn> */}
              <div className="w-full h-auto flex items-center justify-center gap-x-0.5 text-base text-gray-600 font-normal">
                Don't have an account?
                <TertiaryLink>Create Account</TertiaryLink>
              </div>
            </div>
            {/* Form of the components will be added in this card */}
            <div className="w-[30%] h-auto py-7 px-5 rounded-md border border-[#313131]/50 shadow-sm bg-transparent">
              <h1 className="text-2xl text-white font-semibold mb-6">
                Form Components Preview
              </h1>
              <div className="w-full h-auto mb-4">
                <Label htmlfor={"username"}>Username</Label>
                <Input
                  id={"username"}
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="w-full h-auto mb-4">
                <Label htmlfor={"message"}>Type Message</Label>
                <Textarea
                  id={"message"}
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
            </div>
            {/* Button of the components will be added in this card */}
            <div className="w-[40%] h-auto py-7 px-5 rounded-md border border-[#313131]/50 shadow-sm bg-transparent">
              <h1 className="text-2xl text-white font-semibold mb-6">
                Buttons Components Preview
              </h1>
              <div className="w-full h-auto mb-6">
                <h1 className="text-xl text-white font-semibold mb-4">
                  Button Preview
                </h1>
                <div className="w-full h-auto flex items-center justify-between">
                  <PrimaryBtn
                    type={"submit"}
                    className=""
                    children="Primary Btn"
                  />
                  <SecondaryBtn
                    type={"button"}
                    className=""
                    children="Secondary Btn"
                  />
                  <TertiaryBtn
                    type={"reset"}
                    className=""
                    children="Tertiary Btn"
                  />
                </div>
              </div>
              <div className="w-full h-auto mb-6">
                <h1 className="text-xl text-white font-semibold mb-4">
                  Link Button Preview
                </h1>
                <div className="w-full h-auto flex items-center justify-between">
                  <PrimaryLink
                    to="/primary"
                    className=""
                    children="Primary Link"
                  />
                  <SecondaryLink
                    to="/secondary"
                    className=""
                    children="Secondary Link"
                  />
                  <TertiaryLink
                    to="/tertiary"
                    className=""
                    children="Tertiary Link"
                  />
                </div>
              </div>
              <div className="w-full h-auto flex items-center gap-x-4">
                <Radio
                  id="radioButton1"
                  htmlfor="radioButton1"
                  name="radio"
                  children="This is Radio Button 1"
                />
                <Radio
                  id="radioButton2"
                  htmlfor="radioButton2"
                  name="radio"
                  children="This is Radio Button 2"
                />
              </div>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
