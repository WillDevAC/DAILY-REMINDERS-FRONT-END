import React, { useState } from "react";

import Header from "../../components/dashboard/header";
import Task from "../../components/dashboard/task";
import Footer from "../../components/home/footer";
import Modal from "../../components/modals";
import useModal from "../../hooks/useModal";

import "./styles.scss";

const Dashboard: React.FC = () => {
  const { isOpen, toggle } = useModal();

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
          <div className="NewTask" onClick={toggle}>
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
              badge_type="agended"
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
            <img
              src="/public/pro.png"
              alt="Torne-se PRO"
              title="Torne-se PRO"
            />
            <h3>
              Aproveite e seja <b>PRO</b>
            </h3>
            <span>Quer ter funcionalidades extras? assine nosso plano.</span>
            <button>SABER MAIS</button>
          </div>
        </div>
      </main>
      <Footer />
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="modalwrapper">
          <div className="inputgroupp">
            <label>Titulo da tarefa: </label>
            <input type="text" />
          </div>
          <div className="groupform">
            <div className="groupforminput">
              <label>Data de inicio: </label>
              <input type="datetime-local" />
            </div>
            <div className="groupforminput">
              <label>Data de termino: </label>
              <input type="datetime-local" />
            </div>
          </div>
          <div className="inputgroupp">
            <label>Descrição: </label>
            <textarea rows={8} cols={8} />
          </div>

          <fieldset>
            <legend>Preferências:</legend>

            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label htmlFor="scales">Receber notificações de tarefas</label>
            </div>
          </fieldset>
          <div className="inputgroupp">
            <button>CADASTRAR TAREFA</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
