import React from "react";

import { useHistory } from "react-router-dom";

import "./styles.scss";

const Register: React.FC = () => {

  const router = useHistory();

  return (
    <div className="container">
      <div className="wrapper_avatar">
        <img src="/public/logo_pequena.png" alt="avatar" />
        <p onClick={() => router.goBack()}>VOLTAR PARA TRÁS</p>
      </div>
      <div className="wrapper">
        <div className="form">
          <h1>Registro</h1>
          <span>
            Preencha os dados com atenção.
          </span>
          <div className="form-group">
            <input type="text" placeholder="Nome" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" />
          </div>
          <div className="form-groups">
            <button className="blue" onClick={() => router.push('/dashboard')}>Registrar-se</button>
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

export default Register;
