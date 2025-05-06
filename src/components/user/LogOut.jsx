import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

export const LogOut = () => {

    const {setAuth, setCounters} = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        //vaciar localsto
        localStorage.clear();

        //setear estados globales a vacio
        setAuth({});
        setCounters({});

        //navigate

        navigate("/login")
    })

  return (
    <h1>CERRANDO SESION...</h1>
  )
}
