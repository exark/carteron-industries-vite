import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = ({
  testimonial17Id = '',
  heading1 = "Témoignages Clients",
  content1 = "Découvrez ce que nos clients disent de nos solutions innovantes pour l'agriculture moderne. Leur satisfaction est notre plus grande récompense.",
  author1Name = "Pierre Dubois",
  author1Position = "Agriculteur, Ferme Dubois",
  author1Alt = "Pierre Dubois",
  review1 = "Carteron Industries a révolutionné notre façon de travailler. Leurs solutions technologiques nous ont permis d'augmenter notre productivité de 40% tout en réduisant nos coûts.",
  author2Name = "Marie Laurent",
  author2Position = "Directrice, Coopérative Agricole",
  author2Alt = "Marie Laurent",
  review2 = "L'équipe de Carteron Industries est exceptionnelle. Leur expertise technique et leur accompagnement personnalisé ont transformé notre exploitation. Je recommande vivement !",
  author3Name = "Jean-Claude Moreau",
  author3Position = "Propriétaire, Domaine Moreau",
  author3Alt = "Jean-Claude Moreau",
  review3 = "Après 30 ans d'agriculture traditionnelle, j'ai découvert Carteron Industries. Leurs innovations m'ont permis de moderniser mon exploitation tout en préservant nos traditions.",
  author4Name = "Sophie Martin",
  author4Position = "Ingénieure Agronome, Institut Agricole",
  author4Alt = "Sophie Martin",
  review4 = "En tant qu'experte du secteur, je peux affirmer que Carteron Industries est à la pointe de l'innovation agricole. Leurs solutions sont non seulement efficaces mais aussi durables.",
}) => {
  return (
    <div id={testimonial17Id} className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-header">
          <h2 className="testimonial17-title">{heading1}</h2>
          <p className="testimonial17-subtitle">{content1}</p>
        </div>
        
        <div className="testimonial17-container">
          {/* Premier témoignage - Aligné à droite */}
          <div className="testimonial17-item testimonial17-right">
            <div className="testimonial17-content">
              <div className="testimonial17-text">
                <p className="testimonial17-quote">{review1}</p>
                <div className="testimonial17-author">
                  <img
                    alt={author1Alt}
                    src="/images/stoick.jpg"
                    className="testimonial17-avatar"
                  />
                  <div className="testimonial17-author-info">
                    <h4 className="testimonial17-name">{author1Name}</h4>
                    <p className="testimonial17-position">{author1Position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième témoignage - Aligné à gauche */}
          <div className="testimonial17-item testimonial17-left">
            <div className="testimonial17-content">
              <div className="testimonial17-text">
                <p className="testimonial17-quote">{review2}</p>
                <div className="testimonial17-author">
                  <img
                    alt={author2Alt}
                    src="/images/fille en boite.jpg"
                    className="testimonial17-avatar"
                  />
                  <div className="testimonial17-author-info">
                    <h4 className="testimonial17-name">{author2Name}</h4>
                    <p className="testimonial17-position">{author2Position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Troisième témoignage - Aligné à droite */}
          <div className="testimonial17-item testimonial17-right">
            <div className="testimonial17-content">
              <div className="testimonial17-text">
                <p className="testimonial17-quote">{review3}</p>
                <div className="testimonial17-author">
                  <img
                    alt={author3Alt}
                    src="/images/rousse.jpg"
                    className="testimonial17-avatar"
                  />
                  <div className="testimonial17-author-info">
                    <h4 className="testimonial17-name">{author3Name}</h4>
                    <p className="testimonial17-position">{author3Position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quatrième témoignage - Aligné à gauche */}
          <div className="testimonial17-item testimonial17-left">
            <div className="testimonial17-content">
              <div className="testimonial17-text">
                <p className="testimonial17-quote">{review4}</p>
                <div className="testimonial17-author">
                  <img
                    alt={author4Alt}
                    src="/images/graffiti.jpg"
                    className="testimonial17-avatar"
                  />
                  <div className="testimonial17-author-info">
                    <h4 className="testimonial17-name">{author4Name}</h4>
                    <p className="testimonial17-position">{author4Position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.propTypes = {
  testimonial17Id: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  review1: PropTypes.string,
  author2Name: PropTypes.string,
  author2Position: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  author3Position: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.string,
  author4Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Alt: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial17
