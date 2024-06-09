import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANG, USER } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

  const handleGpt = () => {
    dispatch(toggleGptSearch());
  };
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
  const handlelang= (e) => {
    dispatch(changeLang(e.target.value));
   
  };
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between no-scrollbar">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
        {showGptSearch && (<select className="p-2 m-2 bg-black text-white rounded-lg" onChange={handlelang}>
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          
          <button
            onClick={handleGpt}
            className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg hover:text-red-500 "
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <button className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg hover:text-red-500  ">
            Movies
          </button>
          <button className=" text-red-600 font-bold text-2xl p-4 px-12 rounded-lg hover:text-red-500  ">
            TV Shows
          </button>
          <img className=" hidden w-12 h-12" alt="usericon" src={USER} />

          <button
            onClick={handleSignOut}
            className="font-bold text-2xl text-red-600 hover:text-red-500  "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
