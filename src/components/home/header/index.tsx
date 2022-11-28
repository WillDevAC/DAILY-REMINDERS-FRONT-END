import React from "react";

import './styles.scss'

const Header: React.FC = () => {
  return (
    <>
      <header className="_header">
        <div className="logo">
          <img src="public/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <button>Começar agora</button>
        </div>
      </header>
    </>
  );
};

export default Header;
