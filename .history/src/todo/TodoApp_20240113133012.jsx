import React, { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogoutComponent from "./component/LogoutComponent";
import FooterComponent from "./component/FooterComponent";
import ListTodosComponent from "./component/ListTodosComponent";
import HeaderComponent from "./component/HeaderComponent";
import ErrorComponent from "./component/ErrorComponent";
import WelcomeComponent from "./component/WelcomeComponent";
import LoginComponent from "./component/LoginComponent";
import AuthProvider from "./security/AuthContext";
function AuthencicateRoute(){
  return(

  )
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
