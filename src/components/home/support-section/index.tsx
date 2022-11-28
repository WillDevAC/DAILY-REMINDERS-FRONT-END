import React from 'react';

import './styles.scss'

const SupportSection: React.FC = () => {
  return (
    <section className="support">
        <div className="supportHeadline">
            <h1>Tem alguma <b>sugestão</b> de melhoria ou reclamação da nossa plataforma?</h1>
            <span>Entre em contato com nossa equipe e nos ajude com sua recomendação.</span>
        </div>
        <div className="supportForm">
            <h1>FALE CONOSCO</h1>
            <div className="form-groups">
                <input type="text" placeholder='Nome*'/>
                <input type="text" placeholder='Celular*'/>
            </div>
            <div className="form-group">
                <input type="text" placeholder='Email *' />
            </div>
            <div className="form-group">
                <textarea rows={6} cols={6} placeholder="Mensagem *"/>
            </div>

            <div className="form-group">
                <button>ENVIAR SUGESTÃO</button>
            </div>
        </div>
    </section>
  );
}

export default SupportSection;