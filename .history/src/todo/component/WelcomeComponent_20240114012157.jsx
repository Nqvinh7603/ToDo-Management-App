import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WelcomeComponent = () => {
    const { username } = useParams();
    function callHelloWorldRestApi(){

    }
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Quản lý việc cần làm của bạn - <Link to="/todos">Đến đây</Link>
      </div>
      <div>
        <button className='btn btn-success' onClick={callHelloWorldRestApi}>Call HelloWorld Rest Api</button>
      </div>
    </div>
  );
};

export default WelcomeComponent;