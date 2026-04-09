import { supabase } from '../../../lib/supabase';

/**
 * Send confirmation email to survey participant via Supabase Edge Function
 * @param {Object} params
 * @param {string} params.email - User's email address
 * @param {string} params.full_name - User's full name
 * @param {'club'|'family'} params.survey_type - Type of survey
 */
export async function sendSurveyConfirmationEmail({ email, full_name, survey_type }) {
  // Only send email if user provided an email address
  if (!email || !email.trim()) {
    console.log('[Survey] No email provided, skipping confirmation email');
    return;
  }

  const surveyTypeLabel = survey_type === 'club' 
    ? 'Club de Golf' 
    : 'Golfeur & Famille';

  console.log('[Survey] Sending email with params:', {
    email,
    full_name,
    survey_type,
    surveyTypeLabel
  });

  try {
    const { data, error } = await supabase.functions.invoke('send-survey-confirmation', {
      body: {
        to_email: email,
        user_name: full_name,
        survey_type_label: surveyTypeLabel,
      },
    });

    if (error) {
      if (error.context && typeof error.context.json === 'function') {
        const body = await error.context.json().catch(() => null);
        console.error('[Survey] Edge function HTTP error:', error.context.status, body);
      } else {
        console.error('[Survey] Edge function error:', error.name, error.message, error);
      }
      throw error;
    }

    console.log('[Survey] Confirmation email sent successfully to:', email, data);
  } catch (error) {
    console.error('[Survey] Failed to send confirmation email:', error);
    // Don't throw error - we don't want to fail the survey submission if email fails
  }
}

/**
 * Submit a survey response to Supabase.
 * @param {Object} payload
 * @param {'club'|'family'} payload.survey_type
 * @param {string} payload.full_name
 * @param {string} payload.email
 * @param {string} [payload.phone]
 * @param {string} payload.country
 * @param {string} [payload.organization_name]
 * @param {boolean} payload.consent
 * @param {Object} payload.answers - JSONB flexible answers object
 */
export async function submitSurvey(payload) {
  const { data, error } = await supabase.rpc('submit_survey', {
    p_survey_type: payload.survey_type,
    p_full_name: payload.full_name,
    p_email: payload.email,
    p_phone: payload.phone || null,
    p_country: payload.country,
    p_organization_name: payload.organization_name || null,
    p_consent: payload.consent,
    p_answers: payload.answers,
  });

  if (error) throw error;

  // Send confirmation email after successful submission
  await sendSurveyConfirmationEmail({
    email: payload.email,
    full_name: payload.full_name,
    survey_type: payload.survey_type,
  });

  return data;
}
