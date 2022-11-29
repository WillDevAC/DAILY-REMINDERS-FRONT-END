import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss'

interface IProps{
  modalOpenProfile: Function;
}

const header: React.FC<IProps> = ({ modalOpenProfile }) => {
  
  const router = useHistory();

  return (
    <header className='_header'>
        <div className="logo">
            <img src="/public/logo.png" alt="Logo" />
        </div>
        <div className="profile">
            <i className="fa-sharp fa-solid fa-right-from-bracket" onClick={() => router.replace('/')}></i>
            <img src="/public/user.png" alt="" onClick={() => modalOpenProfile()}/>
        </div>
    </header>
  );
}

export default header;