import React from "react";

import "./styles.scss";

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
        <div className="depositions_card">
          <div className="ico">
            <img src="/public/ico.png" alt="" />
          </div>
          <span>lorem impsu lorem impsu</span>
          <div className="deposition_author">
            <img src="#" alt="avatar" />
            <div className="author_details">
              <p>Timsom K.</p>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
        <div className="depositions_card">
          <div className="ico">
            <img src="/public/ico.png" alt="" />
          </div>
          <span>lorem impsu lorem impsu</span>
          <div className="deposition_author">
            <img src="#" alt="avatar" />
            <div className="author_details">
              <p>Timsom K.</p>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
        <div className="depositions_card">
          <div className="ico">
            <img src="/public/ico.png" alt="" />
          </div>
          <span>lorem impsu lorem impsu</span>
          <div className="deposition_author">
            <img src="#" alt="avatar" />
            <div className="author_details">
              <p>Timsom K.</p>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositionsSection;
