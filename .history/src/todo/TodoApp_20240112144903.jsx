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
    return(
        <div className='Login'>
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
                <button type='button' name='login'>Đăng nhập</button>
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