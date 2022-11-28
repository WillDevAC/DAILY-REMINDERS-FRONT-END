import React from "react";

import { useHistory } from "react-router-dom";

import "./styles.scss";

const Auth: React.FC = () => {
  const router = useHistory();

  return (
    <div className="container">
      <div className="wrapper_avatar">
        <img src="/public/logo_pequena.png" alt="avatar" />
        <p onClick={() => router.goBack()}>VOLTAR PARA HOME</p>
      </div>
      <div className="wrapper">
        <div className="form">
          <h1>Entrar</h1>
          <span>
            Já possui uma conta em nossa plataforma? Entre utilizando e-mail e
            senha ou utilize suas redes sociais
          </span>
          <div className="form-groups">
            <button>
              <img src="/public/facebook.svg" />
              Facebook
            </button>
            <button>
              <img src="/public/google.svg" />
              Google
            </button>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" />
          </div>
        </div>
        <div className="avatar">
          <img
            src="https://legacy.eskolare.com/images/heroimage-welcome.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
