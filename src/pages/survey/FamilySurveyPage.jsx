import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar81 from '../../components/layout/navbar81';
import Footer31 from '../../components/layout/footer31';
import MultiStepSurvey from '../../features/surveys/components/MultiStepSurvey';
import { familySurveyConfig } from '../../features/surveys/config/surveyConfig';
import '../../features/surveys/components/survey.css';

const FamilySurveyPage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const eyebrow = { fr: 'Golfeur & Famille', en: 'Golfer & Family' };
  const title = familySurveyConfig.title[lang] || familySurveyConfig.title.fr;
  const subtitle = familySurveyConfig.subtitle[lang] || familySurveyConfig.subtitle.fr;

  return (
    <Navbar81>
      <div className="survey-page">
        <div className="survey-page-header">
          <span className="survey-page-eyebrow">{eyebrow[lang]}</span>
          <h1 className="survey-page-title">{title}</h1>
          <p className="survey-page-subtitle">{subtitle}</p>
        </div>

        <MultiStepSurvey config={familySurveyConfig} />
      </div>
      <Footer31 />
    </Navbar81>
  );
};

export default FamilySurveyPage;
