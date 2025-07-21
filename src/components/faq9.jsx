import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq9.css'

const FAQ9 = ({
  fAQ9Id = '',
  heading1 = "Questions Fréquemment Posées",
  content1 = "Trouvez rapidement les réponses à vos questions sur nos solutions innovantes pour l'agriculture moderne et nos services d'ingénierie.",
  faq1Question = "Quelles sont les solutions technologiques proposées par Carteron Industries ?",
  faq2Question = "Comment puis-je bénéficier des services d'ingénierie de Carteron Industries ?",
  faq3Question = "Carteron Industries propose-t-il un support de maintenance pour ses solutions ?",
  faq4Question = "Carteron Industries peut-il personnaliser les solutions selon mes besoins spécifiques ?",
}) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setfaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <div id={fAQ9Id} className="faq9faq8 thq-section-padding full-width-bg">
      <div className="faq9-max-width thq-flex-column thq-section-max-width">
        <div className="faq9-section-title thq-flex-column">
          <div className="faq9-content">
            <h2 className="thq-heading-2">{heading1}</h2>
            <p className="thq-body-large">{content1}</p>
          </div>
        </div>
        <div className="faq9-list thq-flex-column">
          <div className="faq9-faq1 thq-box-shadow thq-section-max-width">
            <div
              onClick={() => setfaq1Visible(!faq1Visible)}
              className="faq9-trigger1"
            >
              <p className="faq9-faq1-question thq-body-large">
                {faq1Question}
              </p>
              <div className="faq9-icons-container1">
                <div className="faq9-icon-wrapper">
                  {faq1Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon12">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon10">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq1Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container12">
                <span className="thq-body-small">
                  Carteron Industries propose une gamme complète de solutions technologiques innovantes pour l'agriculture moderne. Nos solutions incluent des systèmes d'automatisation intelligents, des capteurs IoT pour la surveillance des cultures, des logiciels de gestion d'exploitation agricole, et des équipements de précision pour l'optimisation des ressources. Nous développons également des solutions sur mesure pour répondre aux besoins spécifiques de chaque exploitation agricole.
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq2 thq-box-shadow thq-section-max-width">
            <div
              onClick={() => setFaq2Visible(!faq2Visible)}
              className="faq9-trigger2"
            >
              <p className="faq9-faq2-question1 thq-body-large">
                {faq2Question}
              </p>
              <div className="faq9-icons-container2">
                <div className="faq9-icon-wrapper">
                  {faq2Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon16">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon14">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq2Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container15">
                <span className="thq-body-small">
                  Nos services d'ingénierie vous permettent d'optimiser vos processus agricoles grâce à une approche personnalisée. Nous analysons votre exploitation, identifions les points d'amélioration, et concevons des solutions sur mesure. Nos ingénieurs vous accompagnent de la conception à l'implémentation, garantissant une intégration parfaite et une formation complète de vos équipes pour maximiser les bénéfices de nos solutions.
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq3 thq-box-shadow thq-section-max-width">
            <div
              onClick={() => setFaq3Visible(!faq3Visible)}
              className="faq9-trigger3"
            >
              <p className="faq9-faq2-question2 thq-body-large">
                {faq3Question}
              </p>
              <div className="faq9-icons-container3">
                <div className="faq9-icon-wrapper">
                  {faq3Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon20">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon18">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq3Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container18">
                <span className="thq-body-small">
                  Oui, Carteron Industries propose un support de maintenance complet pour toutes ses solutions. Notre équipe technique est disponible 24h/24 et 7j/7 pour assurer le bon fonctionnement de vos équipements. Nous proposons des contrats de maintenance préventive, des interventions d'urgence, et des mises à jour logicielles régulières pour garantir la performance optimale de vos installations.
                </span>
              </div>
            </div>
          </div>
          <div className="faq9-faq4 thq-box-shadow thq-section-max-width">
            <div
              onClick={() => setFaq4Visible(!faq4Visible)}
              className="faq9-trigger4"
            >
              <p className="faq9-faq2-question3 thq-body-large">
                {faq4Question}
              </p>
              <div className="faq9-icons-container4">
                <div className="faq9-icon-wrapper">
                  {faq4Visible ? (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon24">
                      <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" className="faq9-icon22">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className={`faq9-answer ${faq4Visible ? 'faq9-answer-visible' : ''}`}>
              <div className="faq9-container21">
                <span className="thq-body-small">
                  Absolument ! La personnalisation est au cœur de notre approche. Chaque exploitation agricole a ses spécificités, et nous adaptons nos solutions en conséquence. Nos ingénieurs travaillent en étroite collaboration avec vous pour comprendre vos besoins, analyser votre environnement de travail, et développer des solutions parfaitement adaptées à votre contexte et à vos objectifs de production.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ9.propTypes = {
  content1: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  fAQ9Id: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
  heading1: PropTypes.string,
}

export default FAQ9
