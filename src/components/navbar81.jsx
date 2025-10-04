import React, { useState, Fragment, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import "./navbar81.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { getAllProducts } from "../data/products";

const Navbar81 = (props) => {
  const { t } = useTranslation();
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:1024px)");
  
  // Get products dynamically
  const products = getAllProducts();

  // Handle off-canvas menu
  const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
  };

  const closeOffCanvas = () => {
    setOffCanvasOpen(false);
  };

  // Add body class when off-canvas is open
  useEffect(() => {
    if (offCanvasOpen) {
      document.body.classList.add('off-canvas-open');
    } else {
      document.body.classList.remove('off-canvas-open');
    }
    
    return () => {
      document.body.classList.remove('off-canvas-open');
    };
  }, [offCanvasOpen]);

  // Refs pour la gestion du dropdown
  const navbarRef = useRef(null);
  const megaMenuRef = useRef(null);
  const autreRef = useRef(null);

  // Gestion du hover pour le mega menu
  const handleMegaMenuMouseEnter = () => {
    if (isDesktop) {
      setLink5DropdownVisible(true);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    if (isDesktop) {
      setLink5DropdownVisible(false);
    }
  };

  // Gestion spécifique pour le bouton "autre"
  const handleAutreMouseEnter = () => {
    if (isDesktop) {
      setLink5DropdownVisible(true);
    }
  };

  const handleAutreMouseLeave = () => {
    // Ne pas fermer ici, laisser le mega menu gérer la fermeture
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setLink5DropdownVisible(false); // Ferme le mega menu
    if (location.pathname === "/home" || location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
    setDrawerOpen(false);
  };

  // Fonction utilitaire pour scroller avec un offset (par exemple, hauteur de la navbar)
  const scrollToWithOffset = (element, offset = 100) => {
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    setLink5DropdownVisible(false); // Ferme le mega menu
    if (location.pathname === "/home" || location.pathname === "/") {
      if (anchorId) {
        const el = document.getElementById(anchorId);
        if (el) {
          scrollToWithOffset(el); // Utilise le scroll avec offset
        }
      } else {
        // Si anchorId est null, remonter en haut de la page
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (anchorId) {
        navigate("/home", { state: { anchorId } });
      } else {
        navigate("/home", { replace: true });
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    }
    setDrawerOpen(false);
  };

  // Remplacer handleMobileLinkClick par une version harmonisée
  const handleMobileNav = (e, anchorId) => {
    e.preventDefault();
    setDrawerOpen(false);
    setMobileSubMenuOpen(false);
    if (location.pathname === "/home" || location.pathname === "/") {
      if (anchorId) {
        const el = document.getElementById(anchorId);
        if (el) {
          scrollToWithOffset(el); // Utilise le scroll avec offset
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (anchorId) {
        navigate("/home", { state: { anchorId } });
      } else {
        navigate("/home", { replace: true });
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    }
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(false);

  // Fonction de scroll ou redirection smooth
  const handleNavScroll = (anchorId) => {
    if (location.pathname === "/home") {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/home", { state: { anchorId } });
    }
  };

  return (
    <header
      className={`navbar81-container1${showNavbar ? "" : " navbar81-hidden"}${isAtTop ? " navbar81-transparent" : " navbar81-solid"}`}
      ref={navbarRef}
    >
      <header data-thq="thq-navbar" className="navbar81-navbar-interactive">
        {/* Simplified navbar with MENU on left and logo on right */}
        <button
          className="off-canvas-trigger menu-text-button"
          onClick={toggleOffCanvas}
          aria-label="Open menu"
        >
          MENU
        </button>
        
        <a href="/home" onClick={handleLogoClick} className="navbar81-navlink">
          <img src="/images/Logo.png" alt="Carteron Industries" className="navbar81-logo-image" />
        </a>
      </header>
      
      {/* Off-canvas menu */}
      <div className={`off-canvas-menu ${offCanvasOpen ? 'open' : ''}`}>
        <div className="off-canvas-content">
          <button className="off-canvas-close" onClick={closeOffCanvas}>
            ×
          </button>
          <nav className="off-canvas-nav">
            <a href="#home" onClick={(e) => { handleAnchorClick(e, null); closeOffCanvas(); }}>
              {t('navbar.home')}
            </a>
            <a href="/our-product" onClick={(e) => { e.preventDefault(); closeOffCanvas(); navigate('/our-product'); }}>
              {t('navbar.our_product')}
            </a>
            <a href="/notre-entreprise" onClick={(e) => { e.preventDefault(); closeOffCanvas(); navigate('/notre-entreprise'); }}>
              {t('footer.our_company', 'Notre entreprise')}
            </a>
            <a href="/faq" onClick={(e) => { e.preventDefault(); closeOffCanvas(); navigate('/faq'); }}>
              {t('navbar.faq')}
            </a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); closeOffCanvas(); navigate('/contact'); }}>
              {t('navbar.contact')}
            </a>
          </nav>
          <div className="off-canvas-language-switcher">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar81;
