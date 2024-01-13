import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useStateate("user");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
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
      setShowSuccessMessage(false);
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
};

export default LoginComponent;