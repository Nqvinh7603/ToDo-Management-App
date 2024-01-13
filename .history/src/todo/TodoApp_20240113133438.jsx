import React, { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogoutComponent from "./component/LogoutComponent";
import ListTodosComponent from "./component/ListTodosComponent";
import HeaderComponent from "./component/HeaderComponent";
import ErrorComponent from "./component/ErrorComponent";
import WelcomeComponent from "./component/WelcomeComponent";
import LoginComponent from "./component/LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
function AuthencicateRoute({children}){
  const authContext = useAuth();
  if(authContext.isAuthenticated)
    return children;
  return <Navigate></Navigate>
}
const TodoApp = () => {
  return (
    <div className="TodoApp">
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={
            <AuthencicateRoute><WelcomeComponent/></AuthencicateRoute>
          } />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default TodoApp;
