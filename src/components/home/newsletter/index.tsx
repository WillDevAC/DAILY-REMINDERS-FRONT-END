import React from 'react';

import './styles.scss'

const newsletter: React.FC = () => {
  return (
    <div className="newsletter">
        <div className="avatar">
            <img src="https://www.eskolare.com/images/illustrations/newsletters/newsletter-1.svg" />
        </div>
        <div className="form">
            <h1>Quer receber novidades?</h1>
            <span>Receba em primeira mão novidades e atualizações sobre nossa plataforma e ecossistema.</span>
            <div className="form-group">
                <input type="text" placeholder='Coloque seu email e aperte "ENTER"' />
            </div>
        </div>
    </div>
  );
}

export default newsletter;