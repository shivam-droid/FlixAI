import React, { useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { account } from "../appwrite/appwriteConfig.js";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmitButton = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    ); // validate email and password
    setErrorMessage(message);
    if (message) {
      return;
    }
    if (!isSignIn) {
      //sign up logic
      try {
        account
          .create(uuidv4(), email.current.value, password.current.value,name.current.value)
          .then(
            (response) => {
              console.log(response);
            },
            (error) => {
              setErrorMessage(error.message);
              console.log(error);
            }
          );
      } catch (error) {
        throw error;
      }
    }
    if (isSignIn) {
      // signin logic
      try {
        account.createEmailPasswordSession(email.current.value, password.current.value).then(
          (response) => {
            console.log(response);
          },
          (error) => {
            setErrorMessage(error.message);
            console.log(error);
          }
        );
      } catch (error) {
        throw error;
      }
    }
  };

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Form Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 text-white rounded-lg p-8 w-1/4 ">
          <div className="flex justify-center mb-10 mt-6 ">
            <h1 className="text-4xl font-bold ">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-10 items-center"
          >
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-3 w-4/5 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="p-3 w-4/5  rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 w-4/5  rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorMessage && (
              <p className="text-red-500 w-4/5 font-semibold text-md">
                {errorMessage}
              </p>
            )}
            <button
              className="p-3 w-4/5  bg-red-600 text-white rounded hover:bg-red-700"
              onClick={handleSubmitButton}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <span className="text-gray-300 pb-12">
              {isSignIn ? "New to Netflix? " : "Already have an account? "}
              <strong
                className="text-white cursor-pointer"
                onClick={handleSignInForm}
              >
                {isSignIn ? "Sign up now" : "Sign In now"}
              </strong>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
