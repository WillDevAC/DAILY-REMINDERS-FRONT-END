import React, { useState } from "react";

import './styles.scss'

import {useHistory} from 'react-router-dom';

const Header: React.FC = () => {

  const router = useHistory();

  return (
    <>
      <header className="_header">
        <div className="logo">
          <img src="/public/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <button onClick={() => router.push('/auth')}>Começar agora</button>
        </div>
      </header>
    </>
  );
};

export default Header;
