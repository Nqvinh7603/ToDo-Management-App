import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export default function AuthProvider({children}){
    const [number, setNumber] = useState(0);
    setInterval()
    return(
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    ) 
}