import React, { createContext, useState } from 'react';

const AuthContext = createContext();
export default function AuthProvider({children}){
    const [number, setNumber] = useState(0);
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    ) 
}