import React from "react";

import "./styles.scss";

interface IProps{
  iconName: string
  title: string
  description: string
}


const more_info_card: React.FC<IProps> = ({ iconName, title, description }) => {
  return (
    <div className="card">
      <i className={ iconName } aria-hidden="true"></i>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
};

export default more_info_card;
