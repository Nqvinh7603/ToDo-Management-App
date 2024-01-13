import React, { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Route, Router, Routes, useNavigate, useParams } from "react-router-dom";
function LoginComponent() {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit() {
    if (username === "user" && password === "123") {
      console.log("Thanh cong");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("That bai");
      setShowErrorMessage(false);
      setShowErrorMessage(true);
    }
  }
  function SuccessMessageComponent() {
    if (showSuccessMessage) {
      return <div className="successMessage">Đăng nhập thành công</div>;
    }
    return null;
  }
  function ErrorMessageComponent() {
    if (showErrorMessage) {
      return;
    }
    return null;
  }
  return (
    <div className="Login">
    <h1>Time to Login</h1>
      {showSuccessMessage && (
        <div className="successMessage">Đăng nhập thành công</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Đăng nhập thất bại Vui lòng kiểm tra lại mật khẩu hoặc tên đăng nhập
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>Tên đăng nhập</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
function WelcomeComponent() {
  const {username} = useParams();
  console.log(username);
  return (
    <div className="WelcomeComponent">
    <h1>Welcome {username}</h1>
  <div>Welcome Component</div>
  </div>
  );
}
function ErrorComponent() {
  return <div className="ErrorComponent">
    <h1>We are working really hard</h1>
    <div>
      Apologies for the 404. Reach out to me!!!
    </div>
  </div>;
}
function ListTodosComponent() {
  return <div className="ListTodosComponents">
    <h1>Việc bạn cần làm</h1>
    <div>
      Việc làm chi tiết
    </div>
  </div>;
}
const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
          <Route path="/login" element = {<LoginComponent></LoginComponent>}></Route>
          <Route path="/welcome/:username" element = {<WelcomeComponent></WelcomeComponent>}></Route>
          <Route path="/todos" element = {<ListTodosComponent></ListTodosComponent>}></Route>
          <Route path="*" element = {<ErrorComponent></ErrorComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TodoApp;
