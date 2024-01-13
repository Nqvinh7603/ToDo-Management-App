import React, { useContext } from 'react';
import { AuthContext } from '../security/AuthContext';

const FooterComponent = () => {
  const authContext = useContext(AuthContext);
  console.log(`Footer component - ${authContext.number}`)
    return (
        <footer className="footer">
      <div className="container">Footer</div>
    </footer>
    );
};

export default FooterComponent;