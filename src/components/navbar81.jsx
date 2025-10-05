import React, { useState, Fragment, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar81.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar81 = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // State for menu open state only
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize jQuery navigation on component mount
  useEffect(() => {
    // Wait for jQuery to be available
    const initNavigation = () => {
      if (typeof window.$ !== 'undefined') {
        const navigationMenu = {
          $window: $('#main-content'),
          $contentFront: $('#content-front'),
          $hamburger: $('.menu-button'),
          offset: 1800,
          pageHeight: $('#content-front').outerHeight(),
          open: function () {
            this.$window.addClass('tilt');
            this.$hamburger.off('click');
            $('#container, .menu-button').on('click', this.close.bind(this));
            this.hamburgerFix(true);
            setMenuOpen(true);
            console.log('opening...');
          },
          close: function () {
            this.$window.removeClass('tilt');
            $('#container, .menu-button').off('click');
            this.$hamburger.on('click', this.open.bind(this));
            this.hamburgerFix(false);
            setMenuOpen(false);
            console.log('closing...');
          },
          updateTransformOrigin: function () {
            const scrollTop = this.$window.scrollTop();
            const equation = (scrollTop + this.offset) / this.pageHeight * 100;
            this.$contentFront.css('transform-origin', 'center ' + equation + '%');
          },
          hamburgerFix: function (opening) {
            // Menu button is now part of navbar - no position changes needed
          },
          bindEvents: function () {
            this.$hamburger.on('click', this.open.bind(this));
            $('.close').on('click', this.close.bind(this));
            this.$window.on('scroll', this.updateTransformOrigin.bind(this));
          },
          init: function () {
            this.bindEvents();
            this.updateTransformOrigin();
          }
        };
        
        navigationMenu.init();
      } else {
        // Retry if jQuery is not loaded yet
        setTimeout(initNavigation, 100);
      }
    };
    
    initNavigation();
  }, [setMenuOpen]);


  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/home" || location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    if (location.pathname === "/home" || location.pathname === "/") {
      if (anchorId) {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
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

  return (
    <Fragment>
      {/* Paper back - the navigation menu behind main content */}
      <div id="paper-back">
        <nav>
          <div className="close"></div>
          <a href="#home" onClick={(e) => { handleAnchorClick(e, null); }}>
            {t('navbar.home')}
          </a>
          <a href="/our-product" onClick={(e) => { e.preventDefault(); navigate('/our-product'); }}>
            {t('navbar.our_product')}
          </a>
          <a href="/notre-entreprise" onClick={(e) => { e.preventDefault(); navigate('/notre-entreprise'); }}>
            {t('footer.our_company', 'Notre entreprise')}
          </a>
          <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('/faq'); }}>
            {t('navbar.faq')}
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
            {t('navbar.contact')}
          </a>
          <div className="language-switcher-nav">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
      
      {/* Main content wrapper */}
      <div id="main-content">
        <div id="content-front">
          {/* Top Navbar Container - now static */}
          <div className="top-navbar-static">
            {/* Menu Button */}
            <div className="menu-button">MENU</div>
            
            {/* Logo */}
            <div className="navbar-logo">
              <a href="/home" onClick={handleLogoClick}>
                <img src="/images/Logo.png" alt="Carteron Industries" className="navbar81-logo-image" />
              </a>
            </div>
          </div>
          
          {/* Container for main content */}
          <div id="container">
            
            {/* Page content passed as prop */}
            {props.children || props.homeContent}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar81;
