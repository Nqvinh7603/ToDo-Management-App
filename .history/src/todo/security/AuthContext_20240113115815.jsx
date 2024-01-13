import React, { createContext } from 'react';

const AuthContext = createContext();
function AuthProvider({children}){
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    ) 
}