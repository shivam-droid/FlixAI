import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import useSignout from "../appwrite/useSignout";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector(state=> state.user);
  const {signoutUser} = useSignout();
  const navigate = useNavigate();

  const handleSignoutButton = ()=>{
    signoutUser();
    localStorage.removeItem("user");
    navigate('/');

  }

  return (
    <div className="absolute z-30 w-screen flex items-center px-10 justify-between ">
      <div className="w-60 py-4 px-8 ">
        <img
          src={logo}
          alt="FlixAI Logo"
        />
      </div>
      { user && <div className="dropdown dropdown-bottom dropdown-end">
        
        <div tabIndex={0} role="button" className="avatar">
            <div className="w-14 rounded-full">
              <img src= {user.pic} />
            </div>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box z-[1] w-52 p-2 shadow opacity-30 text-gray-300">
          <li className="items-center font-xl">Welcome {user?.name}</li>
          <li className="font-bold items-center font-xl"><button className="hover:text-red-600" onClick={handleSignoutButton}>Logout</button></li>
        </ul>
      </div>
      }
    </div>
  );
};

export default Header;
