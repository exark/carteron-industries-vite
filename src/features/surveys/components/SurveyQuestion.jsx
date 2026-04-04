import React from 'react';

const SurveyQuestion = ({ question, value, onChange, error, lang }) => {
  const label = question.label?.[lang] || question.label?.fr;
  const placeholder = question.placeholder?.[lang] || question.placeholder?.fr || '';

  const handleRadio = (val) => onChange(val);

  const handleMultiselect = (val) => {
    const current = Array.isArray(value) ? value : [];
    if (current.includes(val)) {
      onChange(current.filter((v) => v !== val));
    } else {
      onChange([...current, val]);
    }
  };

  return (
    <div className={`survey-question ${error ? 'has-error' : ''}`}>
      <p className="survey-question-label">
        {label}
        {question.required && <span className="survey-required">*</span>}
      </p>

      {question.type === 'radio' && (
        <div className="survey-options">
          {question.options.map((opt) => {
            const optLabel = opt.label?.[lang] || opt.label?.fr;
            const isSelected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`survey-option ${isSelected ? 'selected' : ''}`}
                onClick={() => handleRadio(opt.value)}
              >
                <span className="survey-option-radio">
                  {isSelected && <span className="survey-option-radio-dot" />}
                </span>
                {optLabel}
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'multiselect' && (
        <div className="survey-options survey-options--multi">
          {question.options.map((opt) => {
            const optLabel = opt.label?.[lang] || opt.label?.fr;
            const selected = Array.isArray(value) && value.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                className={`survey-option survey-option--check ${selected ? 'selected' : ''}`}
                onClick={() => handleMultiselect(opt.value)}
              >
                <span className="survey-option-checkbox">
                  {selected && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {optLabel}
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'textarea' && (
        <textarea
          className="survey-textarea"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
        />
      )}

      {error && <p className="survey-error-msg">{error}</p>}
    </div>
  );
};

export default SurveyQuestion;
