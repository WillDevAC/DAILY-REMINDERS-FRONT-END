import React from 'react';

import './styles.scss'

const header: React.FC = () => {
  return (
    <header className='_header'>
        <div className="logo">
            <img src="/public/logo.png" alt="Logo" />
        </div>
        <div className="profile">
            profile
        </div>
    </header>
  );
}

export default header;