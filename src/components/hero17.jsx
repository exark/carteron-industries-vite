import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./hero17.css";

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Welcome to Smart Tech Solutions
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text6">
                  Your expert in smart technology for agricultural machinery,
                  baby strollers, and golf gear.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text7">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Contact Us</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src="/images/escalier.jpg"
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/images/startup.jpg"
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/images/livre.jpg"
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/images/heat.jpg"
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/images/crayon.jpg"
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="/images/escalier.jpg"
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src="/images/fleur.jpg"
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/images/startup.jpg"
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/images/livre.jpg"
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/images/heat.jpg"
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/images/crayon.jpg"
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="/images/effet.jpg"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src="/images/deluxe.jpg"
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src="/images/fjord.jpg"
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src="/images/basket.jpg"
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src="/images/angle.jpg"
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src="/images/bible.jpg"
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src="/images/macbookpro.jpg"
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src="/images/deluxe.jpg"
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src="/images/fjord.jpg"
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src="/images/basket.jpg"
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src="/images/angle.jpg"
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src="/images/bible.jpg"
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="/images/bulle.jpg"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          
          
        </div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image6Alt: "Hero Image",
  image10Alt: "Hero Image",
  image3Alt: "Hero Image",
  action2: undefined,
  image4Alt: "Hero Image",
  image9Src: undefined,
  image4Src: undefined,
  image8Src: undefined,
  image5Alt: "Hero Image",
  image10Src: undefined,
  image2Alt: "Hero Image",
  image8Alt: "Hero Image",
  image11Src: undefined,
  image7Src: undefined,
  content1: undefined,
  image1Src: undefined,
  action1: undefined,
  image12Alt: "Hero Image",
  image12Src: undefined,
  image9Alt: "Hero Image",
  image11Alt: "Hero Image",
  image2Src: undefined,
  image5Src: undefined,
  image3Src: undefined,
  heading1: undefined,
  image7Alt: "Hero Image",
  image1Alt: "Smart Tech Solutions Hero Image",
  image6Src: undefined,
};

Hero17.propTypes = {
  image6Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  action2: PropTypes.element,
  image4Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image4Src: PropTypes.string,
  image8Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image7Src: PropTypes.string,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  image12Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image5Src: PropTypes.string,
  image3Src: PropTypes.string,
  heading1: PropTypes.element,
  image7Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image6Src: PropTypes.string,
};

export default Hero17;
