import React, { useState} from 'react';
import"./TodoApp.css";
function LoginComponent(){
    const [username, setUsername]= useState('user');
    const [password, setPassword]=  useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(true);
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleSubmit(){
        if(username === 'user' && password === '123' ){
            console.log("Thanh cong");
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        }else{
            console.log("That bai");
            setShowErrorMessage(true);
            setShowErrorMessage(false);
        }
    }
    function SuccessMessageComponent(){
        if(showSuccessMessage){
            return (
                <div className='successMessage'>Đăng nhập thành công</div>
            )
        }
        return null;
    } 
    function ErrorMessageComponent(){
        if(showErrorMessage){
            return (
                <div className='errorMessage'>Đăng nhập thất bại</div>
            )
        }
        return null;
    } 
    return(
        <div className='Login'>
        {showSuccessMessage && <div className='successMessage'>Đăng nhập thành công</div>}
        {showErrorMessage && <div className='errorMessage'>Đăng nhập thất bại
        Vui lòng kiểm tra lại mật khẩu hoặc tên đăng nhập</div>}
        <ErrorMessageComponent></ErrorMessageComponent>
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