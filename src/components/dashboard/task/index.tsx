import React from "react";

import "./styles.scss";

interface IProps {
  badge_type: string;
  isSubtask?: string;
  quantitySubtask?: string;
  title: string;
  description: string;
  date: string;
}

const task: React.FC<IProps> = ({
  badge_type,
  isSubtask,
  quantitySubtask,
  title,
  description,
  date
}) => {
  return (
    <div className="card-taks">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="warnings">
          {isSubtask == "true" && (
            <div className="task-subtask">
              <span>1 / {quantitySubtask}</span>
            </div>
          )}

          {badge_type == "warning" && (
            <div className="task-warning">
              <span>Tarefa atrasada</span>
            </div>
          )}

          {badge_type == "in_progress" && (
            <div className="task-inprogress">
              <span>Em andamento</span>
            </div>
          )}

          {badge_type == "finalized" && (
            <div className="task-finalized">
              <span>Finalizada</span>
            </div>
          )}
        </div>
      </div>
      <span>{description}</span>
      <p><i className="fa-sharp fa-solid fa-calendar-days"></i>  {date}</p>
    </div>
  );
};

export default task;
