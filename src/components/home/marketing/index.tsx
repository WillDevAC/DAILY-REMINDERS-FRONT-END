import React from "react";

import './styles.scss'

const Marketing: React.FC = () => {
  return (
    <section className="marketing">
      <div className="headline">
        <h1>
          Organize suas <b id="typograph">tarefas</b> de maneira inteligente.
        </h1>
        <span>
          Aqui você organiza suas tarefas de maneira prática, dinamica e direta
          dentro da nossa plataforma interativa online.
        </span>
      </div>
      <div className="banner">
        <img src="public/hero.svg" alt="@hero avatar" />
      </div>
      <div className="card-info"></div>
    </section>
  );
};

export default Marketing;
