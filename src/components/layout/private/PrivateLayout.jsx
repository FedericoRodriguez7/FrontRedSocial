import React from 'react'
import { Header } from '../private/Header'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'

export const PrivateLayout = () => {
  return (
    <>
        {/*LAYAOUT*/}
        <Header />

        <section className="layout_content">
            <Outlet />

        </section>

        <SideBar /> 


    </>
  )
}
