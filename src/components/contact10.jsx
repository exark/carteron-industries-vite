import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './contact10.css'

// ⬇️ On place les valeurs par défaut dans la destructuration des props
const Contact10 = ({
  content1,
  location2Description,
  location2ImageSrc,
  location2,
  location1ImageSrc,
  location1Description,
  contact10Id = '',
  location1ImageAlt = 'Main Office Location',
  location1,
  heading1,
  location2ImageAlt = 'Email Contact',
}) => {
  return (
    <div
      id={contact10Id}
      className="contact10-container1 thq-section-padding"
    >
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {heading1 ?? (
                <Fragment>
                  <span className="contact10-text21">Get in Touch</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Feel free to reach out for inquiries or collaborations.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container4">
            <img
              alt={location2ImageAlt}
              src="/images/contact-smartphone.jpg"
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {location2 ?? (
                <Fragment>
                  <span className="contact10-text18">
                    Email: info@smarttechengineer.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {location2Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Send us an email for any questions or proposals.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.propTypes = {
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  contact10Id: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
