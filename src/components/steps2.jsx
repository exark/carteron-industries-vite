import React, { Fragment } from "react";
import Button from '@mui/material/Button';

import PropTypes from "prop-types";

import "./steps2.css";

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Services
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <Button
                variant="contained"
                className="steps2-button"
                style={{
                  background: "#fff",
                  color: "#000",
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(32, 101, 209, 0.10)",
                  fontFamily: "Montserrat, Arial, Helvetica, sans-serif",
                  textTransform: "none",
                  padding: "10px 28px",
                }}
              >
                Main action
              </Button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text32">Consultation</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      Initial consultation to understand your smart tech needs
                      and requirements.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Design and Development
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      Customized design and development of smart tech solutions
                      for agricultural machinery, baby strollers, and golf gear.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Testing and Implementation
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      Thorough testing of the systems followed by seamless
                      implementation into your existing setup.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Maintenance and Support
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Ongoing maintenance and support services to ensure optimal
                      performance of the smart tech systems.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Steps2.defaultProps = {
  step3Title: undefined,
  step3Description: undefined,
  step1Description: undefined,
  step4Title: undefined,
  step2Description: undefined,
  step4Description: undefined,
  step2Title: undefined,
  rootClassName: "",
  step1Title: undefined,
};

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step3Description: PropTypes.element,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Description: PropTypes.element,
  step2Title: PropTypes.element,
  rootClassName: PropTypes.string,
  step1Title: PropTypes.element,
};

export default Steps2;
