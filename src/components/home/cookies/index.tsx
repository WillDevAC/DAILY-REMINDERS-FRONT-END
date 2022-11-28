import React from 'react';

import './styles.scss'

const Cookies: React.FC = () => {
  return (
    <div className="cookies-container">
    <div className="cookies-content">
      <p>Este site usa cookies para melhor experiência.</p>
      <button className="cookies-save">Aceito os cookies</button>
    </div>
  </div>
  );
}

export default Cookies;