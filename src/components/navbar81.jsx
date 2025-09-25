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

  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:1024px)");
  
  // Get products dynamically
  const products = getAllProducts();

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
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    // La navbar reste toujours visible sur tous les appareils
    setShowNavbar(true);
    
    // Scroll detection for transparent navbar at top
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page (within 50px threshold)
      if (currentScrollY <= 50) {
        // Immediately make transparent when at top
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
          scrollTimeoutRef.current = null;
        }
        setIsAtTop(true);
      } else {
        // Add delay before making background solid when scrolling down
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          setIsAtTop(false);
          scrollTimeoutRef.current = null;
        }, 300); // 300ms delay before background appears
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
        {/* Desktop Version */}
        {isDesktop ? (
          <>
            <a href="/home" onClick={handleLogoClick} className="navbar81-navlink">
              <img src="/images/Logo.png" alt="Carteron Industries" className="navbar81-logo-image" />
            </a>
            <div data-thq="thq-navbar-nav" className="navbar81-desktop-menu">
              <nav className="navbar81-links1">
                <a
                  href="#home"
                  onClick={(e) => handleAnchorClick(e, null)}
                  className="navbar81-link11 thq-body-small"
                >
                  <span className="navbar81-text14 thq-link">
                    {t('navbar.home')}
                  </span>
                </a>
                {/* <a
                  href="#temoignages"
                  onClick={(e) => handleAnchorClick(e, "temoignages")}
                  className="navbar81-link31  thq-body-small"
                >
                  <span className="navbar81-text18 thq-link">{t('navbar.testimonials')}</span>
                </a> */}
                {/* Our Products avec mega menu */}
                <div
                  className="navbar81-link4-dropdown-trigger"
                  onMouseEnter={handleAutreMouseEnter}
                  onMouseLeave={handleAutreMouseLeave}
                  onClick={(e) => {
                    e.preventDefault();
                    setLink5DropdownVisible(false);
                    navigate("/our-product");
                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                  }}
                  style={{ position: "relative" }}
                >
                  <span className="thq-body-small">
                    <span className="navbar81-text21 thq-link">{t('navbar.our_product')}</span>
                  </span>
                  <div className="navbar81-icon-container1">
                    {link5DropdownVisible ? (
                      <div className="navbar81-container2">
                        <svg viewBox="0 0 1024 1024" className="navbar81-icon10">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    ) : (
                      <div className="navbar81-container3">
                        <svg viewBox="0 0 1024 1024" className="navbar81-icon12">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <a
                  href="/notre-entreprise"
                  onClick={(e) => {
                    e.preventDefault();
                    setLink5DropdownVisible(false); // Ferme le mega menu
                    if (location.pathname === "/notre-entreprise") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      navigate("/notre-entreprise", { replace: true });
                      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                    }
                  }}
                  className="navbar81-link31 thq-body-small"
                >
                  <span className="navbar81-text25 thq-link">{t('footer.our_company', 'Notre entreprise')}</span>
                </a>
                <a
                  href="/faq"
                  onClick={(e) => {
                    e.preventDefault();
                    setLink5DropdownVisible(false); // Ferme le mega menu
                    if (location.pathname === "/faq") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      navigate("/faq", { replace: true });
                      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                    }
                  }}
                  className="navbar81-link32 thq-body-small"
                >
                  <span className="navbar81-text26 thq-link">{t('navbar.faq')}</span>
                </a>
            </nav>
            <div className="navbar81-buttons1">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  setLink5DropdownVisible(false); // Ferme le mega menu
                  if (location.pathname === "/contact") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate("/contact", { replace: true });
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      100
                    );
                  }
                }}
                sx={{ 
                  color: "#fff", 
                  fontWeight: 600, 
                  borderRadius: 2,
                  backgroundColor: "#0b2244",
                  "&:hover": {
                    backgroundColor: "#21517a"
                  }
                }}
              >
                {t('navbar.contact')}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
          </>
        ) : (
          // MOBILE/TABLETTE
          <>
            <a href="/home" onClick={handleLogoClick} className="navbar81-navlink-mobile">
              <img src="/images/Logo.png" alt="Carteron Industries" className="navbar81-logo-image-mobile" />
            </a>
            <button
              aria-label="Ouvrir le menu"
              onClick={() => setDrawerOpen(true)}
              className="navbar81-burger"
            >
              Menu
            </button>
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                style: {
                  width: "100vw",
                  height: "100vh",
                  padding: 0,
                  border: "none",
                  position: "relative",
                },
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  border: "none",
                },
              }}
            >
              {/* Menu principal mobile/tablette */}
              {!mobileSubMenuOpen ? (
                <div style={{ position: "relative", height: "100%" }}>
                  <nav className="navbar81-mobile-links">
                    <a
                      href="#home"
                      onClick={(e) => handleMobileNav(e, null)}
                      className="mobile-menu-link"
                    >
                      {t('navbar.home')}
                    </a>
                    {/* <a
                      href="#temoignages"
                      onClick={(e) => handleMobileNav(e, "temoignages")}
                      className="mobile-menu-link"
                    >
                      {t('navbar.testimonials')}
                    </a> */}
                    {/* Bouton pour ouvrir le sous-menu Our Products */}
                    <div style={{ marginBottom: 16 }}>
                      <button
                        type="button"
                        onClick={() => setMobileSubMenuOpen(true)}
                        className="mobile-menu-autre-btn"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          cursor: "pointer",
                          color: "#191818",
                          padding: "16px 0",
                          outline: "none",
                          width: "100%",
                          textAlign: "left",
                          borderBottom: "1px solid #f0f0f0",
                        }}
                      >
                        <span>{t('navbar.our_product')}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          style={{ marginLeft: "auto" }}
                        >
                          <path d="M8 5v14l11-7z" fill="#000000ff" />
                        </svg>
                      </button>
                    </div>
                    <a
                      href="/notre-entreprise"
                      onClick={(e) => {
                        e.preventDefault();
                        setDrawerOpen(false);
                        navigate("/notre-entreprise");
                        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                      }}
                      className="mobile-menu-link"
                    >
                      {t('footer.our_company', 'Notre entreprise')}
                    </a>
                    <a
                      href="/faq"
                      onClick={(e) => {
                        e.preventDefault();
                        setDrawerOpen(false);
                        navigate("/faq");
                        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                      }}
                      className="mobile-menu-link"
                    >
                      {t('navbar.faq')}
                    </a>
                    <a
                      onClick={() => setDrawerOpen(false)}
                      href="/contact"
                      className="mobile-menu-link"
                    >
                      {t('navbar.contact')}
                    </a>
                  </nav>
                  {/* Sélecteur de langue en bas du menu */}
                  <div className="navbar81-lang-switcher-mobile-bottom">
                    <LanguageSwitcher direction="row" />
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="mobile-close-button"
                    aria-label="Fermer le menu"
                  >
                    <CloseIcon style={{ fontSize: 20, color: "#0b2244" }} />
                  </button>
                </div>
              ) : (
                // Sous-menu Our Products
                <div style={{ position: "relative", height: "100%" }}>
                  <nav className="navbar81-mobile-links">
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                      {/* Flèche retour */}
                      <button
                        onClick={() => setMobileSubMenuOpen(false)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          marginRight: 16,
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                        }}
                        aria-label="Retour au menu principal"
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#0b2244" />
                        </svg>
                      </button>
                      <span
                        style={{ fontWeight: 700, fontSize: "1.2rem", color: "#0b2244", cursor: "pointer" }}
                        className="mobile-menu-autre-span"
                        onClick={() => setMobileSubMenuOpen(false)}
                        tabIndex={0}
                        role="button"
                        aria-label="Retour au menu principal"
                        onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setMobileSubMenuOpen(false); }}
                      >
                        {t('navbar.our_product')}
                      </span>
                    </div>
                    {products.map((product, index) => (
                      <a
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setDrawerOpen(false);
                          setMobileSubMenuOpen(false);
                          navigate(`/product/${product.slug}`);
                        }}
                        className="mobile-menu-link"
                        style={{ paddingLeft: "16px", borderBottom: "none" }}
                      >
                        {t(`${product.translationKey}.title`, 'Product Title')}
                      </a>
                    ))}
                  </nav>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      setMobileSubMenuOpen(false);
                    }}
                    className="mobile-close-button"
                    aria-label="Fermer le menu"
                  >
                    <CloseIcon style={{ fontSize: 20, color: "#0b2244" }} />
                  </button>
                </div>
              )}
            </Drawer>
          </>
        )}
      </header>
      
      {/* Mega Menu en overlay */}
      {isDesktop && (
        <div
          className={
            "navbar81-mega-menu" +
            (link5DropdownVisible ? " mega-menu-open" : " mega-menu-closed")
          }
          ref={megaMenuRef}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="navbar81-mega-menu-content">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="navbar81-mega-menu-item"
                onClick={() => {
                  setLink5DropdownVisible(false);
                  navigate(`/product/${product.slug}`);
                }}
              >
                <img
                  src={product.images.main}
                  alt={t(`${product.translationKey}.title`, 'Product Title')}
                  className="navbar81-mega-menu-image"
                />
                <div className="navbar81-mega-menu-text">
                  <h3>{t(`${product.translationKey}.title`, 'Product Title')}</h3>
                  <p className="navbar81-mega-menu-description">
                    {t(`${product.translationKey}.subtitle`, 'Product Subtitle')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar81;
