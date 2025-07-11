import React, { useState, Fragment, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./navbar81.css";

const Navbar81 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:1024px)");

  // Same as your original (desktop dropdown)
  const autreRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!link5DropdownVisible) return;
    const handleClick = (event) => {
      if (
        autreRef.current &&
        !autreRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setLink5DropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [link5DropdownVisible]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/home" || location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/home", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
    setDrawerOpen(false);
  };

  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    if (location.pathname === "/home" || location.pathname === "/") {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/home", { state: { anchorId } });
    }
    setDrawerOpen(false);
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY < 30) {
      setShowNavbar(true); // Toujours visible en haut de page
    } else if (window.scrollY > lastScrollY.current) {
      setShowNavbar(false); // On descend -> cache la navbar
    } else {
      setShowNavbar(true); // On monte -> affiche la navbar
    }
    lastScrollY.current = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header className={`navbar81-container1${showNavbar ? "" : " navbar81-hidden"}`}>
      <header data-thq="thq-navbar" className="navbar81-navbar-interactive">
        <a href="/home" onClick={handleLogoClick} className="navbar81-navlink">
          <img
            src="/images/Logo.png"
            loading="lazy"
            className="navbar81-image1"
            alt={props.logoAlt}
          />
        </a>
        {/* Desktop Version */}
        {isDesktop ? (
          <div data-thq="thq-navbar-nav" className="navbar81-desktop-menu">
            <nav className="navbar81-links1">
              <a
                href="#Features24"
                onClick={(e) => handleAnchorClick(e, "Features24")}
                className="navbar81-link11 thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar81-text14 thq-link">
                      Nos Service
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href="#Testimonial17"
                onClick={(e) => handleAnchorClick(e, "Testimonial17")}
                className="navbar81-link31  thq-body-small"
              >
                <Fragment>
                  <span className="navbar81-text18 thq-link">Temoignage</span>
                </Fragment>
              </a>
              <a
                href="#FAQ9"
                onClick={(e) => handleAnchorClick(e, "FAQ9")}
                className="navbar81-link32  thq-body-small"
              >
                {props.link31 ?? (
                  <Fragment>
                    <span className="navbar81-text26 thq-link">FAQ</span>
                  </Fragment>
                )}
              </a>
              {/* Dropdown Desktop */}
              <div
                className="navbar81-link4-dropdown-trigger"
                onClick={() => setLink5DropdownVisible((v) => !v)}
                style={{ position: "relative" }}
                ref={autreRef}
              >
                <span className="thq-body-small">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar81-text21 thq-link">autre</span>
                    </Fragment>
                  )}
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
            </nav>
            {/* Dropdown Content Desktop */}
            <div
              className={
                "navbar81-container7 thq-box-shadow" +
                (link5DropdownVisible ? " dropdown-open" : " dropdown-closed")
              }
              ref={dropdownRef}
            >
              <div className="navbar81-link5-menu-list">
                {/* Même structure que ton menu d'origine */}
                <a href={props.linkUrlPage1}>
                  <div className="navbar81-menu-item5">
                    <img
                      src="/images/fjord.jpg"
                      className="navbar81-page1-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content5">
                      <span className="navbar81-page12 thq-body-large">
                        {props.page1 ?? (
                          <Fragment>
                            <span className="navbar81-text19">Home</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page1Description ?? (
                          <Fragment>
                            <span className="navbar81-text20">
                              Page One Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a>
                  <div className="navbar81-menu-item6">
                    <img
                      src="/images/livre.jpg"
                      className="navbar81-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content6">
                      <span className="navbar81-page22 thq-body-large">
                        {props.page2 ?? (
                          <Fragment>
                            <span className="navbar81-text27">
                              Agricultural Machinery
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page2Description ?? (
                          <Fragment>
                            <span className="navbar81-text17">
                              Page Two Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a>
                  <div className="navbar81-menu-item7">
                    <img
                      src="/images/livre.jpg"
                      className="navbar81-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content7">
                      <span className="navbar81-page32 thq-body-large">
                        {props.page3 ?? (
                          <Fragment>
                            <span className="navbar81-text16">
                              Baby Strollers
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page3Description ?? (
                          <Fragment>
                            <span className="navbar81-text28">
                              Page Three Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a>
                  <div className="navbar81-menu-item8">
                    <img
                      src="/images/livre.jpg"
                      className="navbar81-page2-image2 thq-img-ratio-1-1"
                    />
                    <div className="navbar81-content8">
                      <span className="navbar81-page42 thq-body-large">
                        {props.page4 ?? (
                          <Fragment>
                            <span className="navbar81-text25">Golf Gear</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.page4Description ?? (
                          <Fragment>
                            <span className="navbar81-text15">
                              Page Four Description
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="navbar81-buttons1">
              <a
                href="/home"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    location.pathname === "/home" ||
                    location.pathname === "/"
                  ) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate("/home", { replace: true });
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      100
                    );
                  }
                }}
                className="navbar81-action21 thq-button-outline thq-button-animated"
              >
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar81-text22">Accueil</span>
                    </Fragment>
                  )}
                </span>
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
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
                className="navbar81-action21 thq-button-outline thq-button-animated"
              >
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar81-text24">contactez nous</span>
                    </Fragment>
                  )}
                </span>
              </a>
            </div>
          </div>
        ) : (
          // MOBILE/TABLETTE
          <>
            <IconButton
              aria-label="open drawer"
              onClick={() => setDrawerOpen(true)}
              className="navbar81-burger"
            >
              <MenuIcon style={{ fontSize: 32, color: "#b89d77" }} />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                style: { width: "100vw", background: "#fff", padding: 0 },
              }}
            >
              <nav
                className="navbar81-mobile-links"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  padding: "36px 24px 24px 24px",
                }}
              >
                {/* Accueil en haut */}
                <a
                  onClick={() => setDrawerOpen(false)}
                  href="/home"
                  className="mobile-menu-link"
                  style={{
                    color: "#191818",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1.12rem",
                    marginBottom: 8,
                  }}
                >
                  Accueil
                </a>
                <a
                  href="#Features24"
                  onClick={(e) => handleAnchorClick(e, "Features24")}
                  className="mobile-menu-link"
                  style={{
                    color: "#191818",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1.12rem",
                  }}
                >
                  Nos Service
                </a>
                <a
                  href="#Testimonial17"
                  onClick={(e) => handleAnchorClick(e, "Testimonial17")}
                  className="mobile-menu-link"
                  style={{
                    color: "#191818",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1.12rem",
                  }}
                >
                  Temoignage
                </a>
                <a
                  href="#FAQ9"
                  onClick={(e) => handleAnchorClick(e, "FAQ9")}
                  className="mobile-menu-link"
                  style={{
                    color: "#191818",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1.12rem",
                  }}
                >
                  FAQ
                </a>
                {/* Accordéon Autre */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen((o) => !o)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      background: "none",
                      border: "none",
                      fontSize: "1.12rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "#191818",
                      padding: "12px 0",
                      outline: "none",
                    }}
                  >
                    <span>Autre</span>
                    <svg
                      className={`mobile-dropdown-arrow${
                        mobileDropdownOpen ? " open" : ""
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        transition: "transform 0.25s cubic-bezier(.4,2,.6,1)",
                        transform: mobileDropdownOpen
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                        marginLeft: 0,
                      }}
                    >
                      <path d="M8 5v14l11-7z" fill="#b89d77" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px",
                        paddingLeft: "18px",
                        borderLeft: "2px solid #b89d77",
                      }}
                    >
                      <a
                        href={props.linkUrlPage1}
                        onClick={() => setDrawerOpen(false)}
                        className="mobile-menu-link"
                        style={{
                          color: "#191818",
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "1.04rem",
                        }}
                      >
                        {props.page1 ?? "Home"}
                      </a>
                      <a
                        href="#"
                        className="mobile-menu-link"
                        style={{
                          color: "#191818",
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "1.04rem",
                        }}
                      >
                        {props.page2 ?? "Agricultural Machinery"}
                      </a>
                      <a
                        href="#"
                        className="mobile-menu-link"
                        style={{
                          color: "#191818",
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "1.04rem",
                        }}
                      >
                        {props.page3 ?? "Baby Strollers"}
                      </a>
                      <a
                        href="#"
                        className="mobile-menu-link"
                        style={{
                          color: "#191818",
                          fontWeight: "bold",
                          textDecoration: "none",
                          fontSize: "1.04rem",
                        }}
                      >
                        {props.page4 ?? "Golf Gear"}
                      </a>
                    </div>
                  )}
                </div>
                <a
                  onClick={() => setDrawerOpen(false)}
                  href="/contact"
                  className="mobile-menu-link"
                  style={{
                    color: "#191818",
                    fontWeight: "bold",
                    textDecoration: "none",
                    fontSize: "1.12rem",
                  }}
                >
                  Contactez-nous
                </a>
                <div style={{ height: 24 }} />
              </nav>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                style={{ position: "absolute", top: 8, right: 8, zIndex: 2000 }}
                aria-label="Fermer le menu"
              >
                <CloseIcon />
              </IconButton>
            </Drawer>
          </>
        )}
      </header>
    </header>
  );
};

export default Navbar81;
