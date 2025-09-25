import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import { useTranslation } from "react-i18next";
import "./legal-pages.css";

const Privacy = () => {
  const { t } = useTranslation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="legal-page-container">
      <Helmet>
        <title>{t("privacy.title", "Privacy Policy")} - Carteron Industries</title>
        <meta property="og:title" content={`${t("privacy.title", "Privacy Policy")} - Carteron Industries`} />
        <meta name="description" content={t("privacy.meta_description", "Learn how Carteron Industries protects your privacy and handles your personal data.")} />
      </Helmet>
      <Navbar81 />
      
      <main className="legal-content">
        <div className="legal-header">
          <h1 className="legal-title">{t("privacy.title", "Privacy Policy")}</h1>
          <p className="legal-subtitle">{t("privacy.last_updated", "Last updated: January 2024")}</p>
        </div>

        <div className="legal-sections">
          <section className="legal-section">
            <p className="legal-intro">{t("privacy.intro", "At Carteron Industries, we are committed to protecting your privacy and ensuring the security of your personal information.")}</p>
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section1_title", "1. Information We Collect")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("privacy.section1_text", "We collect information you provide directly to us, such as when you contact us or use our services.") }} />
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section2_title", "2. How We Use Your Information")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("privacy.section2_text", "We use the information we collect to provide, maintain, and improve our services.") }} />
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section3_title", "3. Information Sharing")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("privacy.section3_text", "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.") }} />
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section4_title", "4. Data Security")}</h2>
            <p>{t("privacy.section4_text", "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.")}</p>
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section5_title", "5. Your Rights")}</h2>
            <div dangerouslySetInnerHTML={{ __html: t("privacy.section5_text", "You have the right to access, update, or delete your personal information at any time.") }} />
          </section>

          <section className="legal-section">
            <h2>{t("privacy.section6_title", "6. Contact Us")}</h2>
            <p>{t("privacy.section6_text", "If you have any questions about this Privacy Policy, please contact us.")}</p>
            <div className="contact-info">
              <p><strong>Carteron Industries</strong></p>
              <p>Email: carteron.industries@gmail.com</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer31 />
    </div>
  );
};

export default Privacy;