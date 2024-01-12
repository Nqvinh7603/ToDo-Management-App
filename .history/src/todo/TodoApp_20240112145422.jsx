import React, { useState} from 'react';
import"./TodoApp.css";
function LoginComponent(){
    const [username, setUsername]= useState('user');
    const [password, setPassword]=  useState('');
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleSubmit(){
        if(username === 'user' && password === '123' ){
            console.log("Thanh cong");
        }else{
            console.log("That bai");
        }
    }
    return(
        <div className='Login'>
        <div className='successMessage'>Đăng nhập thành công</div>
        <div className='errorMessage'>Đăng nhập thất bại</div>
            <div className='LoginForm'>
            <div>
                <label>
                    Tên đăng nhập
                </label>
                <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
            </div>
            <div>
                <label>
                    Mật khẩu
                </label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type='button' name='login' onClick={handleSubmit}>Đăng nhập</button>
            </div>
            </div>
        </div>
    )
}
function WelcomeComponent(){
    return(
        <div className='Welcome'>
            Welcome Component
        </div>
    )
}

const TodoApp = () => {
    return (
        <div className='TodoApp'>
            Todo Management Application
            <LoginComponent></LoginComponent>
            {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    );
};

export default TodoApp;