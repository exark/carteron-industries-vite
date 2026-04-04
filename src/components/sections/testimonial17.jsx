import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'
import { useTranslation } from "react-i18next";

const testimonialKeys = [
  't1',
  't2',
  't3',
  't4',
];

const Testimonial17 = ({ rootClassName = "" }) => {
  const { t } = useTranslation();
  const testimonials = testimonialKeys.map((key, idx) => ({
    name: t(`testimonials.${key}.name`, `Nom ${idx + 1}`),
    title: t(`testimonials.${key}.title`, ''),
    text: t(`testimonials.${key}.text`, ''),
  }));
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-header">
          <h2 className="testimonial17-title">{t('testimonials.title', 'Témoignages')}</h2>
          <p className="testimonial17-subtitle">{t('testimonials.subtitle', 'Découvrez ce que nos clients disent de nos solutions innovantes pour l\'agriculture moderne. Leur satisfaction est notre plus grande récompense.')}</p>
        </div>
        
        <div className="testimonial17-container">
          {testimonials.map((item, idx) => (
            <div key={idx} className={`testimonial17-item ${idx % 2 === 0 ? 'testimonial17-right' : 'testimonial17-left'}`}>
              <div className="testimonial17-content">
                <div className="testimonial17-text">
                  <p className="testimonial17-quote">{item.text}</p>
                  <div className="testimonial17-author">
                    <img
                      alt={item.name}
                      src={
                        idx === 0 ? "/images/stoick.jpg" :
                        idx === 1 ? "/images/fille en boite.jpg" :
                        idx === 2 ? "/images/rousse.jpg" :
                        idx === 3 ? "/images/graffiti.jpg" :
                        "/images/stoick.jpg"
                      }
                      className="testimonial17-avatar"
                    />
                    <div className="testimonial17-author-info">
                      <h4 className="testimonial17-name">{item.name}</h4>
                      <p className="testimonial17-position">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
