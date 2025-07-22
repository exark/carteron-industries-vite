import React from "react";
import { Helmet } from "react-helmet";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-container1">
      <Helmet>
        <title>{t("privacy.title")} - Carteron Industries</title>
        <meta property="og:title" content={`${t("privacy.title")} - Carteron Industries`} />
      </Helmet>
      <Navbar81 />
      <main style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
        <h1>{t("privacy.title")}</h1>
        <p>{t("privacy.intro")}</p>
        <h2>{t("privacy.section1_title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section1_text") }} />
        <h2>{t("privacy.section2_title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section2_text") }} />
        <h2>{t("privacy.section3_title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section3_text") }} />
        <h2>{t("privacy.section4_title")}</h2>
        <p>{t("privacy.section4_text")}</p>
        <h2>{t("privacy.section5_title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section5_text") }} />
        <h2>{t("privacy.section6_title")}</h2>
        <p>{t("privacy.section6_text")}</p>
      </main>
      <Footer31 />
    </div>
  );
};

export default Privacy; 