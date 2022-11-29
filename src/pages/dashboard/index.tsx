import React, { useState } from "react";

import Header from "../../components/dashboard/header";
import Task from "../../components/dashboard/task";
import Footer from "../../components/home/footer";
import Modal from "../../components/modals";
import useModal from "../../hooks/useModal";

import "./styles.scss";

const Dashboard: React.FC = () => {
  const [modalType, setModalType] = useState("true");

  const { isOpen, toggle } = useModal();

  const modalOpenAdd = () => {
    setModalType("true");
    toggle();
  };

  const modalOpenView = () => {
    setModalType("false");
    toggle();
  };

  const modalOpenProfile = () => {
    setModalType("profile");
    toggle();
  };

  return (
    <>
      <Header modalOpenProfile={modalOpenProfile} />
      <main className="_mainn">
        <div className="tasksContainer">
          <div className="tasks-headline">
            <h1>Minhas tarefas</h1>
            <div className="tasks-search">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Pesquisar..." />
            </div>
          </div>
          <div className="NewTask" onClick={() => modalOpenAdd()}>
            Clique aqui para adicionar uma nova tarefa
          </div>
          <div className="tasks">
            <div onClick={() => modalOpenView()}>
              <Task
                badge_type="warning"
                isSubtask="false"
                title="Tarefa 01"
                description="Fazer reunião com seu antonio."
                date="00/00/0000 - 00/00/0000"
                isBorder="false"
              />
            </div>
            <div onClick={() => modalOpenView()}>
              <Task
                badge_type="in_progress"
                isSubtask="true"
                title="Tarefa 02"
                quantitySubtask="3"
                description="Fazer as compras do mês."
                date="00/00/0000 - 00/00/0000"
                isBorder="false"
              />
            </div>

            <div onClick={() => modalOpenView()}>
              <Task
                badge_type="finalized"
                title="Tarefa 03"
                description="Falar com a jertrudes."
                date="00/00/0000 - 00/00/0000"
                isBorder="false"
              />
            </div>

            <div onClick={() => modalOpenView()}>
              <Task
                badge_type="agended"
                title="Tarefa 04"
                description="Falar com o jerabina."
                date="00/00/0000 - 00/00/0000"
                isBorder="false"
              />
            </div>
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

      {modalType == "true" && (
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
      )}
      {modalType == "false" && (
        <Modal isOpen={isOpen} toggle={toggle}>
          <Task
            badge_type="warning"
            title="Tarefa 04"
            description="Fazer reunião com seu antonio."
            date="00/00/0000 - 00/00/0000"
            isBorder="true"
          />
          <div className="subtasktitle">
            <p>
              <i className="fa-sharp fa-solid fa-list"></i> Checklist
            </p>
          </div>
          <div className="addnewsubtask">
            <textarea
              rows={3}
              cols={3}
              placeholder="Digite aqui sua sub-tarefa."
            />
            <div className="buttonaddnewtasksubtask">
              <button>Adicionar</button>
            </div>
            <div className="inputcheckboxtask">
              <div className="groupcheckbox">
                <input type="checkbox" id="check1" checked />
                <label htmlFor="check1">
                  Lembrar sobre o problema da creuza.{" "}
                </label>
              </div>
              <div className="groupcheckbox">
                <input type="checkbox" id="check1" checked />
                <label htmlFor="check1">Falar sobre a carne de carneiro.</label>
              </div>
              <div className="groupcheckbox">
                <input type="checkbox" id="check1" checked />
                <label htmlFor="check1">Lembrar do emprego novo.</label>
              </div>
            </div>
          </div>
          <div className="subtasktitle">
            <p>
              <i className="fa-sharp fa-solid fa-pen-to-square"></i> Ações
            </p>
          </div>
          <div className="buttonssubtasktitle">
            <button>Arquivar</button>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </Modal>
      )}

      {modalType == "profile" && (
        <Modal isOpen={isOpen} toggle={toggle}>
          <div className="profileboxx">
            <div className="profilebooxxinfo">
              <h1>Meu perfil</h1>
              <span>Veja detalhes do seu perfil.</span>
            </div>
          </div>
          <div className="profileinputsform">
            <div className="groupppinputtt">
              <div className="inputname">
                <label htmlFor="nomeees">Nome: </label>
                <input type="text" placeholder="Nome" value="IGOR MAIA" id="nomeees" />
              </div>
              <div className="inputemail">
                <label htmlFor="emaiill">E-mail: </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  value="igormaia@gmail.com"
                  id="emaiill"
                />
              </div>
            </div>
            <div className="inputindividualaal">
              <label htmlFor="senhaantiga">Senha antiga: </label>
              <input type="password" placeholder="" id="senhaantiga" />
            </div>
            <div className="inputindividualaal">
              <label htmlFor="novasenha">Nova senha: </label>
              <input type="password" placeholder="" id="novasenha" />
            </div>
            <div className="subtasktitle">
              <p>
                <i className="fa-sharp fa-solid fa-user"></i> Ações
              </p>
            </div>
            <div className="inputaddindividuallist">
              <button>Finalizar conta</button>
              <button>Editar perfil</button>
            </div>  
          </div>
        </Modal>
      )}
    </>
  );
};

export default Dashboard;
