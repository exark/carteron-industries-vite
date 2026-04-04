import React from 'react';

const SurveyProgress = ({ currentStep, totalSteps, steps, lang }) => {
  const pct = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="survey-progress">
      <div className="survey-progress-header">
        <span className="survey-progress-label">
          {steps[currentStep - 1]?.label?.[lang] || steps[currentStep - 1]?.label?.fr}
        </span>
        <span className="survey-progress-count">
          {currentStep} / {totalSteps}
        </span>
      </div>

      <div className="survey-progress-track">
        <div
          className="survey-progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="survey-progress-steps">
        {steps.map((step, idx) => {
          const n = idx + 1;
          const isDone = n < currentStep;
          const isActive = n === currentStep;
          return (
            <div
              key={step.id}
              className={`survey-progress-dot ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`}
            >
              <div className="survey-progress-dot-inner">
                {isDone ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span>{n}</span>
                )}
              </div>
              <span className="survey-progress-dot-label">
                {step.label?.[lang] || step.label?.fr}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SurveyProgress;
