import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import "./footer31.css";

const Footer31 = () => (
  <footer className="custom-footer">
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <img
            src="/images/Logo.png"
            alt="Carteron Industries Logo"
            className="footer-logo"
          />
          <div className="footer-brand-text">Carteron Industries</div>
        </div>
        <div className="footer-links-group">
          <div>
            <div className="footer-title">About</div>
            <ul>
              <li>
                <a href="/about">Our Company</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Follow Us</div>
            <ul>
              <li>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
              <li>
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Legal</div>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Carteron Industries™
        </div>
        <div className="footer-icons">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <BsFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <BsTwitter />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <BsGithub />
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
            <BsDribbble />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer31;
