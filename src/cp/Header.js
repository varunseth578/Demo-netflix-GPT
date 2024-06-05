import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, USER } from "../utils/constants";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between no-scrollbar">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      <div className="flex p-2 justify-between">
      <button className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg ">Home</button>
      <button className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg ">Movies</button>
      <button className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg ">TV Show</button>
        <img className=" w-12 h-12" alt="usericon" src={USER} />

        <button onClick={handleSignOut} className="font-bold text-xl text-red-600 ">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};
export default Header;
