import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setAuthenticated] = useState(false);
  function login(username, password){
    if (username === "user" && password === "123") {
        setAuthenticated(true);
         return true;
      } else {
        setAuthenticated(false);
        return false; 
      }
  }
  function logout(){
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider value={ {isAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
