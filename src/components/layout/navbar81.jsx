import React, { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar81.css";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar81 = (props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

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
          },
          close: function () {
            this.$window.removeClass('tilt');
            $('#container, .menu-button').off('click');
            this.$hamburger.on('click', this.open.bind(this));
            this.hamburgerFix(false);
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
  }, []);


  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/home" || location.pathname === "/") {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.location.href = "/home";
    }
  };

  // Desktop navbar helpers
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const isActive = (path) => {
    if (path === "/home") return isHome;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  const goHome = (e) => {
    e.preventDefault();
    if (isHome) {
      const mainContent = document.getElementById("main-content");
      if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home");
    }
  };
  const goTo = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <Fragment>
      {/* Paper back - the navigation menu behind main content */}
      <div id="paper-back">
        <nav>
          <div className="close"></div>
          <a href="#home" onClick={(e) => { e.preventDefault(); if (location.pathname === "/home" || location.pathname === "/") { const mainContent = document.getElementById('main-content'); if (mainContent) { mainContent.scrollTo({ top: 0, behavior: "smooth" }); } } else { window.location.href = "/home"; } }}>
            {t('navbar.home')}
          </a>
          <a href="/our-product" onClick={(e) => { e.preventDefault(); navigate('/our-product'); }} style={{display: 'none'}}>
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
          <a
            href="/admin/login"
            className="navbar-admin-link"
            onClick={(e) => { e.preventDefault(); navigate('/admin/login'); }}
          >
            {t('navbar.login')}
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
          <div className={`top-navbar-static ${location.pathname === '/home' || location.pathname === '/' ? 'transparent' : ''}`}>
            {/* Menu Button (mobile/tablet only) */}
            <div className="menu-button">MENU</div>

            {/* Club Golf Button */}
            <button
              className="club-golf-button"
              onClick={() => navigate('/survey/club')}
            >
              {t('navbar.club_button', 'Vous êtes un club de golf ?')}
            </button>

            {/* Logo */}
            <div className="navbar-logo">
              <a href="/home" onClick={handleLogoClick}>
                <img src="/images/NavbarVersion.png" alt="Carteron Industries" className="navbar81-logo-image" />
              </a>
            </div>

            {/* Desktop-only horizontal nav links */}
            <nav className="desktop-nav-links" aria-label="Navigation principale">
              <a
                href="#home"
                onClick={goHome}
                className={isActive('/home') ? 'active' : ''}
              >
                {t('navbar.home')}
              </a>
              <a
                href="/our-product"
                onClick={(e) => goTo(e, '/our-product')}
                className={isActive('/our-product') ? 'active' : ''}
                style={{display: 'none'}}
              >
                {t('navbar.our_product')}
              </a>
              <a
                href="/notre-entreprise"
                onClick={(e) => goTo(e, '/notre-entreprise')}
                className={isActive('/notre-entreprise') ? 'active' : ''}
              >
                {t('footer.our_company', 'Notre entreprise')}
              </a>
              <a
                href="/faq"
                onClick={(e) => goTo(e, '/faq')}
                className={isActive('/faq') ? 'active' : ''}
              >
                {t('navbar.faq')}
              </a>
              <a
                href="/contact"
                onClick={(e) => goTo(e, '/contact')}
                className={isActive('/contact') ? 'active' : ''}
              >
                {t('navbar.contact')}
              </a>
            </nav>

            {/* Desktop-only language switcher */}
            <div className="desktop-lang-switcher">
              <LanguageSwitcher />
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
