import React from 'react';

const WelcomeComponent = () => {
    const { username } = useParams();
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Quản lý việc cần làm của bạn - <Link to="/todos">Đến đây</Link>
      </div>
    </div>
  );
};

export default WelcomeComponent;