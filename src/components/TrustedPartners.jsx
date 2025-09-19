import React from "react";
import PropTypes from "prop-types";
import "./TrustedPartners.css";
import { useTranslation } from "react-i18next";

const TrustedPartners = ({ rootClassName = "" }) => {
  const { t } = useTranslation();

  const partners = [
    {
      name: "CCI Oise",
      logo: "/images/cci-oise.svg",
      alt: "CCI Oise"
    },
    {
      name: "Réseau Initiative",
      logo: "/images/reseau_initiative.png",
      alt: "Réseau Initiative"
    },
    {
      name: "Région Hauts-de-France",
      logo: "/images/haut_de_france.jpg",
      alt: "Région Hauts-de-France"
    }
  ];

  return (
    <div className={`trusted-partners-container ${rootClassName}`}>
      <div className="trusted-partners-max-width">
        <div className="trusted-partners-header">
          <h2 className="trusted-partners-title">
            {t('trustedPartners.title')}
          </h2>
        </div>
        <div className="trusted-partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="trusted-partners-item">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="trusted-partners-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

TrustedPartners.propTypes = {
  rootClassName: PropTypes.string,
};

export default TrustedPartners;
