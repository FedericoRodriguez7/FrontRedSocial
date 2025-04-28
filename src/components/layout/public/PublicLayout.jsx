import React from 'react'
import { Header } from '../private/Header'
import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
  return (
    <>
        {/*LAYAOUT*/}
        <Header />

        <section className="layout_content">
            <Outlet />

        </section>


    </>
  )
}
