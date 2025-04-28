import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { PublicLayout } from '../layout/public/PublicLayout'
import { Login } from '../user/Login'
import { Register } from '../user/Register'

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Login/>} />
            <Route path='login' element={<Login/>} />
            <Route path='registro' element={<Register/>} />
        </Route>

    </Routes>
    
    </BrowserRouter>
  )
}
