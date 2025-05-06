import React, { createContext, useEffect, useState } from 'react'
import { Global } from '../helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

   const [auth, setAuth] = useState({});

   useEffect(() => {
        authUser();
   },[]);

   const authUser = async() => {
        //SACAR DATOS DE USUARIO IDENTIFICADO DE L STORAGE
       const token = localStorage.getItem("token");
       const user = localStorage.getItem("user");

        //COMPROBAR SI TENGO EL TOKEN Y EL USER
        if(!token || !user){
            return false;
        }

        // TRANSFORMAR LOS DATOS A UN OBJET JAVASCRIPT
        const userObj = JSON.parse(user);
        const userId = userObj.id;

        //PETICION AJAX AL BACKEND Q COMPRUEBE TOKEN
        const request = await fetch(Global.url + "user/profile/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })

        const data = await request.json();

        //SETEAR EL ESTADO DE AUTH

        setAuth(data.user);
   }


  return (
    <AuthContext
    value={{
        auth,
        setAuth
    }}
    
    >
        {children}
    </AuthContext>
  )
}

export default AuthContext;