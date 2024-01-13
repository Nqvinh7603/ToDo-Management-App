import React, { useState } from "react";
import "./TodoApp.css";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
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
}
function WelcomeComponent() {
  const { username } = useParams();
  console.log(username);
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>Quản lý việc cần làm của bạn - <Link to="/todos">Đến đây</Link></div>
    </div>
  );
}
function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard</h1>
      <div>Apologies for the 404. Reach out to me!!!</div>
    </div>
  );
}
function HeaderComponent() {
  return (
    <div className="header">
      Header <hr/>
    </div>
  );
}
function FooterComponent() {
  return (
    <div className="footer">
      Footer <hr/>
    </div>
  );
}
function ListTodosComponent() {
  const today= new Date();
  const targetDate = new Date(today.getFullYear()+ 12, today.getMonth(), today.getDay());
  const todos = [
    { id: 1, description: "Learn Java", done: false, targetDate: targetDate },
    { id: 2, description: "Learn Itels", done: false, targetDate:targetDate },
    { id: 3, description: "Learn SQL", done: false, targetDate: targetDate },
  ];
  return (
    <div className="ListTodosComponents">
      <h1>Việc cần làm</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Mô tả</td>
              <td>Đã hoàn thành</td>
              <td>Deadline</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              // eslint-disable-next-line react/jsx-key
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const TodoApp = () => {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent></LoginComponent>} />
          <Route path="/login" element={<LoginComponent></LoginComponent>} />
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent></WelcomeComponent>}
          />
          <Route
            path="/todos"
            element={<ListTodosComponent></ListTodosComponent>}
          />
          <Route path="*" element={<ErrorComponent></ErrorComponent>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TodoApp;
