import React from "react";

import Header from "../../components/dashboard/header";
import Task from "../../components/dashboard/task";
import Footer from "../../components/home/footer";

import "./styles.scss";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <main className="_mainn">
        <div className="tasksContainer">
          <div className="tasks-headline">
            <h1>Minhas tarefas</h1>
            <div className="tasks-search">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Pesquisar..." />
            </div>
          </div>
          <div className="NewTask">
            Clique aqui para adicionar uma nova tarefa
          </div>
          <div className="tasks">
            <Task
              badge_type="warning"
              isSubtask="false"
              title="Tarefa 01"
              description="Fazer reunião com seu antonio."
              date="00/00/0000 - 00/00/0000"
            />
            <Task
              badge_type="in_progress"
              isSubtask="true"
              title="Tarefa 02"
              quantitySubtask="3"
              description="Fazer as compras do mês."
              date="00/00/0000 - 00/00/0000"
            />
            <Task
              badge_type="finalized"
              title="Tarefa 03"
              description="Falar com a jertrudes."
              date="00/00/0000 - 00/00/0000"
            />
            <Task
              badge_type="finalized"
              title="Tarefa 04"
              description="Falar com o jerabina."
              date="00/00/0000 - 00/00/0000"
            />
          </div>
        </div>
        <div className="statisticsContainer">
          <h2>Estatísticas de Novembro</h2>
          <div className="chart">
            <img src="/public/chart.png" alt="Gráfico pizza" />
          </div>
          <div className="upgrade_plan">
            <img src="/public/pro.png" alt="Torne-se PRO" title="Torne-se PRO" />
            <h3>Aproveite e seja <b>PRO</b></h3>
            <span>Quer ter funcionalidades extras? assine nosso plano.</span>
            <button>SABER MAIS</button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Dashboard;
