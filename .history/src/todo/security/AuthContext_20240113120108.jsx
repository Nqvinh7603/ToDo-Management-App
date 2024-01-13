import React, { createContext, useState } from 'react';

const AuthContext = createContext();
export default function AuthProvider({children}){
    useState
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    ) 
}