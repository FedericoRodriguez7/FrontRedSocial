import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [compartido, setCompartido] = useState("Compartida en todos los componentes");


  return (
    <AuthContext
    value={{
        compartido
    }}
    
    >
        {children}
    </AuthContext>
  )
}

export default AuthContext;