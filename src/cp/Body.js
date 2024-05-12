import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse';
import {auth} from "./Firebase";
import { useDispatch} from 'react-redux';
import { addUser, removeUser } from './userSlice';
import { onAuthStateChanged} from "firebase/auth";

export default function Body() {
  const dispatch = useDispatch();
 

  const appRouter = createBrowserRouter(
    [{
      path : "/",
      element: <Login/>,},
      {
        path : "/Browse",
      element: <Browse/>,
      },
    ]);
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
  
        
        } else {
          // User is signed out
       dispatch(removeUser());

        }
      });

    },[])



  return (
    <div>
   <RouterProvider router={appRouter}/>
    </div>
  )
}
