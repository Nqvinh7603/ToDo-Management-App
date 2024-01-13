import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export default function AuthProvider({children}){
    const [number, setNumber] = useState(10);
    setInterval(
        () => setNumber(number + 1), 1000 
    )
    return(
        <AuthContext.Provider value={ {number} }>
            {children}
        </AuthContext.Provider>
    ) 
}