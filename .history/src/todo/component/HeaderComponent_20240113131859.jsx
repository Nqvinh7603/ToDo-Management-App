import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

const HeaderComponent = () => {
  //const authContext = useContext(AuthContext);
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  //console.log(authContext);
  //console.log(authContext.number);
  function logout(){
    authContext.logout(); 
  }
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="https://github.com/Nqvinh7603"
            >
              Todo-App
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  {isAuthenticated && (
                    <Link className="nav-link" to="/welcome/user">
                      Trang chủ
                    </Link>
                  )}
                </li>
                <li className="nav-item fs-5">
                  {isAuthenticated && (
                    <Link className="nav-link" to="/todos">
                      Việc cần làm
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
              {!isAuthenticated && <Link className="nav-link" to="/login">Đăng nhập</Link> }
              </li>
              <li className="nav-item fs-5">
              {isAuthenticated && <Link className="nav-link" to="/logout" onClick={logout}>Đăng xuất</Link> }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
