import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link} from 'react-router-dom'
import { PublicLayout } from '../layout/public/PublicLayout'
import { Login } from '../user/Login'
import { Register } from '../user/Register'
import { PrivateLayout } from '../layout/private/PrivateLayout'
import { Feed } from '../publication/Feed'
import { AuthProvider } from '../context/AuthProvider'
import { LogOut } from '../user/LogOut'
import { People } from '../user/People'
import { Config } from '../user/Config'

export const Routing = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>

        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Login/>} />
            <Route path='login' element={<Login/>} />
            <Route path='registro' element={<Register/>} />
        </Route>

        <Route path='/social' element={<PrivateLayout/>} >
            <Route index element={<Feed/>} />
            <Route path='feed' element={<Feed/>} />
            <Route path='logout' element={<LogOut/>} />
            <Route path='gente' element={<People/>} />
            <Route path='ajustes' element={<Config/>} />



        </Route>

        <Route path='*' element={
          <>
          <p>
          <h1>ERROR 404</h1>
          <Link to="/">Volver al inicio</Link>
          </p>
          
          </>
        }>

        </Route>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}
