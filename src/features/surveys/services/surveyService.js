import { supabase } from '../../../lib/supabase';

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
  return data;
}
