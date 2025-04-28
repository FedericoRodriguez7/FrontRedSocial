import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { PublicLayout } from '../layout/public/PublicLayout'
import { Login } from '../user/Login'
import { Register } from '../user/Register'
import { PrivateLayout } from '../layout/private/PrivateLayout'
import { Feed } from '../publication/Feed'

export const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Login/>} />
            <Route path='login' element={<Login/>} />
            <Route path='registro' element={<Register/>} />
        </Route>

        <Route path='/social' element={<PrivateLayout/>} >
            <Route index element={<Feed/>} />
            <Route path='feed' element={<Feed/>} />

        
        
        </Route>

    </Routes>
    
    </BrowserRouter>
  )
}
