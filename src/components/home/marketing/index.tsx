import React from "react";

import MoreInfoCard from "../card";

import "./styles.scss";

const Marketing: React.FC = () => {
  return (
    <>
      <section className="marketing">
        <div className="headline">
          <h1>
            Organize suas <b id="typograph">tarefas</b> de maneira inteligente.
          </h1>
          <span>
            Aqui você organiza suas tarefas de maneira prática, dinamica e
            direta dentro da nossa plataforma interativa online.
          </span>

          <div className="more-info-cards">
            <MoreInfoCard
              iconName="fas fa-user-graduate"
              title="Tarefas"
              description="Alertas personalizados"
            />
            <MoreInfoCard
              iconName="fas fa-school"
              title="Estatisticas"
              description="Estatistica de tarefas dentro da plataforma"
            />
            <MoreInfoCard
              iconName="fas fa-building"
              title="Bussiness"
              description="Tem um négocio? podemos ajudar você."
            />
          </div>
        </div>
        <div className="banner">
          <img src="/public/hero.svg" alt="@hero avatar" />
        </div>
      </section>
    </>
  );
};

export default Marketing;
