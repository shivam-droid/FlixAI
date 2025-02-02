import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
        path: "/",
        element: <Login />,
        },
        {
        path: "/browse",
        element: <Browse />,
        },
    ]);

    useEffect(() => {
        // Check if user data exists in localStorage
        const userData = localStorage.getItem("user");
        
        if (userData) {
        // If user data exists, dispatch it to Redux
        const { email, name, pic } = JSON.parse(userData);
        dispatch(addUser({ email, name, pic }));
        }
    }, [dispatch]);

  return (
    <div className="overflow-hidden min-h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
