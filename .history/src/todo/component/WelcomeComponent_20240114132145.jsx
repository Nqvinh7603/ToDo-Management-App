import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveHelloWorldBean } from '../api/HellWorldApiService';

const WelcomeComponent = () => {
    const { username } = useParams();
    const [message, setMessage] = useState(null);
    function callHelloWorldRestApi(){
      console.log("Called");
      retrieveHelloWorldBean().then(
        (response) => successfulResponse(response)
      ).catch(
        (error) => errorResponse(error)
      ).finally(
        () => console.log("Clean up")
      )
      // axios.get('http://localhost:8080/hello-world').then(
      //   (response) => successfulResponse(response)
      // ).catch(
      //   (error) => errorResponse(error)
      // ).finally(
      //   () => console.log("Clean up")
      // )

    }
    function successfulResponse(response){
        console.log(response);
        setMessage(response.data.message)
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
      <div className='text-info'>{message}</div>
    </div>
  );
};

export default WelcomeComponent;