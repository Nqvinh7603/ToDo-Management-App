import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [number, setNumber] = useState(10);
  const [isAuthenticated, setAuthenticated] = useState(false);
  //const valueToBeShared = { number, isAuthenticated, setAuthenticated }
  //setInterval(() => setNumber(number + 1), 10000);
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
    <AuthContext.Provider value={ {number, isAuthenticated, setAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
