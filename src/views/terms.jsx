import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import { useTranslation } from "react-i18next";
import "./legal-pages.css";

const Terms = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("terms.title", "Terms and Conditions")} - Carteron Industries</title>
        <meta property="og:title" content={`${t("terms.title", "Terms and Conditions")} - Carteron Industries`} />
        <meta name="description" content={t("terms.meta_description", "Terms and conditions for using Carteron Industries services and products.")} />
      </Helmet>
      <Navbar81>
        <div className="legal-page-container">
          <main className="legal-content">
            <div className="legal-header">
              <h1 className="legal-title">{t("terms.title", "Terms and Conditions")}</h1>
              <p className="legal-subtitle">{t("terms.last_updated", "Last updated: January 2024")}</p>
            </div>

            <div className="legal-sections">
              <section className="legal-section">
                <h2>{t("terms.acceptance_title", "1. Acceptance of Terms")}</h2>
                <p>{t("terms.acceptance_text", "By accessing and using Carteron Industries' website and services, you accept and agree to be bound by the terms and provision of this agreement.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.services_title", "2. Use of Services")}</h2>
                <p>{t("terms.services_text", "Our services are provided for informational and commercial purposes. You agree to use our services only for lawful purposes and in accordance with these terms.")}</p>
                <ul className="legal-list">
                  <li>{t("terms.services_item1", "You must not use our services for any unlawful purpose")}</li>
                  <li>{t("terms.services_item2", "You must not attempt to gain unauthorized access to our systems")}</li>
                  <li>{t("terms.services_item3", "You must not interfere with the proper functioning of our services")}</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>{t("terms.products_title", "3. Products and Orders")}</h2>
                <p>{t("terms.products_text", "All product descriptions, prices, and availability are subject to change without notice. We reserve the right to refuse or cancel any order.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.intellectual_title", "4. Intellectual Property")}</h2>
                <p>{t("terms.intellectual_text", "All content on this website, including text, graphics, logos, images, and software, is the property of Carteron Industries and is protected by copyright and other intellectual property laws.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.liability_title", "5. Limitation of Liability")}</h2>
                <p>{t("terms.liability_text", "Carteron Industries shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.privacy_title", "6. Privacy")}</h2>
                <p>{t("terms.privacy_text", "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.modifications_title", "7. Modifications")}</h2>
                <p>{t("terms.modifications_text", "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.")}</p>
              </section>

              <section className="legal-section">
                <h2>{t("terms.contact_title", "8. Contact Information")}</h2>
                <p>{t("terms.contact_text", "If you have any questions about these Terms and Conditions, please contact us at:")}</p>
                <div className="contact-info">
                  <p><strong>Carteron Industries</strong></p>
                  <p>Email: carteron.industries@gmail.com</p>
                </div>
              </section>
            </div>
          </main>
          
          <Footer31 />
        </div>
      </Navbar81>
    </>
  );
};

export default Terms;
