import React from "react";

import "./styles.scss";

const Auth: React.FC = () => {
  return (
    <div className="container">
      <div className="wrapper_avatar">
        <img src="/public/icon.svg" alt="avatar" />
        <p>VOLTAR PARA HOME</p>
      </div>
      <div className="wrapper">
        <div className="form">form</div>
        <div className="avatar">
          <img src="#" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
