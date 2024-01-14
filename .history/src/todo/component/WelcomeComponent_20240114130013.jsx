import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WelcomeComponent = () => {
    const { username } = useParams();
    
    function callHelloWorldRestApi(){
      console.log("Called");
      axios.get('http://localhost:8080/hello-world').then(
        (response) => successfulResponse(response)
      ).catch(
        (error) => errorResponse(error)
      ).finally(
        () => console.log("Clean up")
      )
    }
    function successfulResponse(response){
        console.log(response);
    }
    function errorResponse(error){
      console.log(error);
  }
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Quản lý việc cần làm của bạn - <Link to="/todos">Đến đây</Link>
      </div>
      <div>
        <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call HelloWorld Rest Api</button>
      </div>
    </div>
  );
};

export default WelcomeComponent;