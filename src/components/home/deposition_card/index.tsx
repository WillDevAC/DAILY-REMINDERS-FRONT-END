import React from "react";

import './styles.scss';

interface IProps {
    comment: string;
    avatarURL: string;
    author: string;
    employer: string;
}

const deposition_card: React.FC<IProps> = ({ comment, avatarURL, author, employer }) => {
  return (
    <div className="depositions_card">
      <div className="ico">
        <img src="/public/ico.png" alt="" />
      </div>
      <span>{ comment }</span>
      <div className="deposition_author">
        <img src={avatarURL} alt="avatar" />
        <div className="author_details">
          <p>{ author }</p>
          <span>{ employer }</span>
        </div>
      </div>
    </div>
  );
};

export default deposition_card;
