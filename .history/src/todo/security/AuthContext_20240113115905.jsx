import React, { createContext } from 'react';

const AuthContext = createContext();
export default function AuthProvider({children}){
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    ) 
}