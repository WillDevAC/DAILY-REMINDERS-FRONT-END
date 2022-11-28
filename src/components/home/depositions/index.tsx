import React from "react";

import "./styles.scss";

import DepositionCard from "../deposition_card";

const DepositionsSection: React.FC = () => {
  return (
    <section className="depositions">
      <div className="depositions_img">
        <img src="/public/starts.png" alt="stars" title="stars" />
        <h1>
          Usuários <b>satisfeitos</b> desde o primeiro dia!
        </h1>
        <span>
          Usuários que tiveram uma experiência fantástica utilizando as nossa
          plataforma. Veja o que dizem sobre nós.
        </span>
      </div>
      <div className="depositions_comment">
        <DepositionCard
          comment="Plataforma inovadora."
          avatarURL="https://www.eskolare.com/images/illustrations/avatars/woman-2.svg"
          author="Soraia G."
          employer="Product Manager"
        />
        <DepositionCard
          comment="Top demais! gostei!"
          avatarURL="https://www.eskolare.com/images/illustrations/avatars/woman-1.svg"
          author="Raquel K."
          employer="Product Manager"
        />
        <DepositionCard
          comment="Vou usar sempre!"
          avatarURL="https://www.eskolare.com/images/illustrations/avatars/woman-4.svg"
          author="Rogerio S."
          employer="Product Manager"
        />
      </div>
    </section>
  );
};

export default DepositionsSection;
