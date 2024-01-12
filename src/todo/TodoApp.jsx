import React from 'react';
function LoginComponent(){
    return(
        <div className='Login'>
            <div className='LoginForm'>
            <div>
                <label>
                    Tên đăng nhập
                </label>
                <input type='text' name='username'/>
            </div>
            <div>
                <label>
                    Mật khẩu
                </label>
                <input type='password' name='password'/>
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