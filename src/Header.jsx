import React from "react";
import Signin from './Signin'
import logo from './assest/logo.svg'
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
const Header = () => {
    const {user,isSignedIn}= useUser()
  return (
    <div  className="flex justify-around border border-black p-3 ">
      <div className="flex border border-black text-center">
      <img src={logo} alt="React Logo" />
       <h1 className="m-auto">Vroom_Vendors</h1>
      </div>
     
         <ul className="flex justify-between gap-4 m-auto">
            <li>Home</li>
            <li>Search</li>
            <li>New</li>
            <li>Preowned</li>
         </ul>
     {
        isSignedIn ?
         <div>
            <UserButton className="m-auto"/>
         </div>
         :
         <button>Click me</button>

     }
     
    </div>
  );
};

export default Header;
