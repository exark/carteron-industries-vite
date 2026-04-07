import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Target, Lightbulb, Users, Rocket, Heart, CheckCircle } from "lucide-react";
import Navbar81 from "../../components/layout/navbar81";
import Footer31 from "../../components/layout/footer31";
import "./notre-entreprise.css";

export default function NotreEntreprise() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="ne-page">
      <Navbar81>

        {/* ── HERO ── */}
        <section className="ne-hero">
          <div className="ne-hero__overlay" />
          <div className="ne-hero__content fade-in">
            <span className="ne-hero__eyebrow">Carteron Industries</span>
            <h1 className="ne-hero__title">{t('notre_entreprise.page_title', 'Notre Entreprise')}</h1>
            <p className="ne-hero__sub">{t('notre_entreprise.page_subtitle', 'Innovation, passion et expertise au service du golf familial')}</p>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="ne-story">
          <div className="ne-story__inner">
            <div className="ne-story__text slide-left">
              <span className="ne-label">Notre Histoire</span>
              <h2 className="ne-story__heading">Nés d'une même passion.</h2>
              <p className="ne-story__body">
                Carteron Industries est née d'un constat simple : trop de parents golfeurs doivent choisir
                entre leur sport et le temps passé en famille. Nous avons décidé de créer une solution qui
                réconcilie ces deux mondes — sans compromis.
              </p>
            </div>
            <div className="ne-story__image slide-right">
              <img src="/images/bptg.png" alt="Golf familial" loading="lazy" />
            </div>
          </div>
        </section>

        {/* ── VISION / MISSION ── */}
        <section className="ne-vm">
          <div className="ne-vm__inner">
            <div className="ne-vm__item slide-up">
              <div className="ne-vm__number">01</div>
              <div className="ne-vm__divider" />
              <h3 className="ne-vm__title">{t('notre_entreprise.vision_title', 'Notre Vision')}</h3>
              <p className="ne-vm__text">{t('notre_entreprise.vision_text', 'Réinventer l\'expérience du golf afin de permettre aux parents golfeurs de partager leur passion avec leurs enfants, et aux clubs d\'attirer une nouvelle clientèle familiale.')}</p>
            </div>
            <div className="ne-vm__item slide-up">
              <div className="ne-vm__number">02</div>
              <div className="ne-vm__divider" />
              <h3 className="ne-vm__title">{t('notre_entreprise.ambition_title', 'Notre Ambition')}</h3>
              <p className="ne-vm__text">{t('notre_entreprise.ambition_text', 'Réunir sport, technologie et vie familiale dans une solution unique.')}</p>
            </div>
            <div className="ne-vm__item slide-up">
              <div className="ne-vm__number">03</div>
              <div className="ne-vm__divider" />
              <h3 className="ne-vm__title">{t('notre_entreprise.mission_title', 'Notre Mission')}</h3>
              <p className="ne-vm__text">{t('notre_entreprise.mission_text', 'Garantir une approche fiable, innovante et orientée utilisateur, grâce à notre expertise technique et notre passion pour le golf.')}</p>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="ne-values">
          <div className="ne-values__inner">
            <div className="ne-values__header slide-up">
              <span className="ne-label">Ce qui nous guide</span>
              <h2 className="ne-values__heading">Nos Valeurs</h2>
            </div>
            <div className="ne-values__grid">
              {[
                { icon: <Lightbulb size={24} />, title: 'Innovation', text: 'Repousser les limites pour créer des solutions uniques et utiles' },
                { icon: <Heart size={24} />, title: 'Passion', text: 'L\'amour du golf et de la famille au cœur de chaque décision' },
                { icon: <Users size={24} />, title: 'Collaboration', text: 'Co-construire avec les clubs et les familles pour un produit adapté' },
                { icon: <CheckCircle size={24} />, title: 'Qualité', text: 'Excellence technique et sécurité sans compromis' },
              ].map((v, i) => (
                <div key={i} className="ne-value-item fade-in">
                  <div className="ne-value-item__icon">{v.icon}</div>
                  <div>
                    <h3 className="ne-value-item__title">{v.title}</h3>
                    <p className="ne-value-item__text">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ne-cta">
          <div className="ne-cta__inner slide-up">
            <h2 className="ne-cta__title">{t('notre_entreprise.cta_title', 'Rejoignez l\'aventure')}</h2>
            <p className="ne-cta__text">{t('notre_entreprise.cta_text', 'Nous recherchons des partenaires et clubs pour co-construire et tester cette innovation.')}</p>
            <button onClick={handleContactClick} className="ne-cta__btn">
              {t('notre_entreprise.contact_button', 'Nous contacter')}
            </button>
          </div>
        </section>

        <Footer31 />
      </Navbar81>
    </div>
  );
}
