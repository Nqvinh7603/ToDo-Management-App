import React from 'react';
function LoginComponent(){
    return(
        <div className='Login'>
            Tên đăng nhập
            Mật khẩu
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