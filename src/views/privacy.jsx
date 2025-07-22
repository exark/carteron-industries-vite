import React from "react";
import { Helmet } from "react-helmet";
import Navbar81 from "../components/navbar81";
import Footer31 from "../components/footer31";

const Privacy = () => (
  <div className="privacy-container1">
    <Helmet>
      <title>Politique de confidentialité - Carteron Industries</title>
      <meta property="og:title" content="Politique de confidentialité - Carteron Industries" />
    </Helmet>
    <Navbar81 />
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
      <h1>Politique de confidentialité</h1>
      <p>Chez Carteron Industries, nous accordons une grande importance à la protection de vos données personnelles et à votre vie privée.</p>
      <h2>1. Données collectées</h2>
      <p>Nous ne collectons que les informations strictement nécessaires au fonctionnement du site et à la gestion de vos demandes via notre formulaire de contact (nom, adresse e-mail, message, etc.).<br/>Aucune donnée n’est transmise à des tiers sans votre consentement.</p>
      <h2>2. Cookies</h2>
      <p>Notre site n’utilise pas de cookies à des fins de suivi, de publicité ou d’analyse.<br/>Seuls des cookies techniques, indispensables au bon fonctionnement du site, peuvent être utilisés.</p>
      <h2>3. Utilisation des données</h2>
      <p>Les informations que vous nous transmettez via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.<br/>Elles ne sont ni revendues, ni utilisées à des fins commerciales.</p>
      <h2>4. Sécurité</h2>
      <p>Nous mettons en œuvre toutes les mesures nécessaires pour garantir la sécurité de vos données.</p>
      <h2>5. Vos droits</h2>
      <p>Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles.<br/>Pour exercer ces droits, contactez-nous à l’adresse suivante : <a href="mailto:ton-email@domaine.com">ton-email@domaine.com</a></p>
      <h2>6. Modifications</h2>
      <p>Cette politique de confidentialité peut être modifiée à tout moment. Nous vous invitons à la consulter régulièrement.</p>
    </main>
    <Footer31 />
  </div>
);

export default Privacy; 