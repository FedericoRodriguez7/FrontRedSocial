import React from 'react'
import { Header } from '../public/Header'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export const PublicLayout = () => {

  const {auth} = useAuth();


  return (
    <>
        {/*LAYAOUT*/}
        <Header />

        <section className="layout_content">
          {!auth._id ? 
            <Outlet />
            : 
            <Navigate to="/social" />
            }


        </section>

        


    </>
  )
}
