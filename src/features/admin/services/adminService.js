import { supabase } from '../../../lib/supabase';

export async function fetchSubmissions({ surveyType, status, search } = {}) {
  let query = supabase
    .from('survey_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (surveyType && surveyType !== 'all') {
    query = query.eq('survey_type', surveyType);
  }
  if (status && status !== 'all') {
    query = query.eq('status', status);
  }
  if (search && search.trim()) {
    const s = search.trim();
    query = query.or(`full_name.ilike.%${s}%,email.ilike.%${s}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function fetchSubmissionById(id) {
  const { data, error } = await supabase
    .from('survey_submissions')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

export async function updateSubmissionStatus(id, status, adminNotes) {
  const update = { status };
  if (adminNotes !== undefined) update.admin_notes = adminNotes;
  const { data, error } = await supabase
    .from('survey_submissions')
    .update(update)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function fetchStats() {
  const { data, error } = await supabase
    .from('survey_submissions')
    .select('survey_type, status, answers, created_at');
  if (error) throw error;

  const total = data.length;
  const byType = { club: 0, family: 0 };
  const byStatus = { new: 0, contacted: 0, qualified: 0, pilot_candidate: 0, closed: 0 };

  // Club answer tallies
  const clubQ1 = {};
  const clubQ2 = {};
  const clubQ3 = {};
  const clubQ4 = {};
  const clubQ5 = {};

  // Family answer tallies
  const famQ1 = {};
  const famQ2 = {};
  const famQ4 = {};
  const famQ5 = {};
  const famQ6 = {};

  data.forEach((row) => {
    byType[row.survey_type] = (byType[row.survey_type] || 0) + 1;
    byStatus[row.status] = (byStatus[row.status] || 0) + 1;

    const a = row.answers || {};

    if (row.survey_type === 'club') {
      if (a.q1_young_parents) clubQ1[a.q1_young_parents] = (clubQ1[a.q1_young_parents] || 0) + 1;
      if (a.q2_childcare_barrier) clubQ2[a.q2_childcare_barrier] = (clubQ2[a.q2_childcare_barrier] || 0) + 1;
      if (Array.isArray(a.q3_product_benefits)) {
        a.q3_product_benefits.forEach((v) => { clubQ3[v] = (clubQ3[v] || 0) + 1; });
      }
      if (a.q4_test_interest) clubQ4[a.q4_test_interest] = (clubQ4[a.q4_test_interest] || 0) + 1;
      if (a.q5_partnership_contact) clubQ5[a.q5_partnership_contact] = (clubQ5[a.q5_partnership_contact] || 0) + 1;
    }

    if (row.survey_type === 'family') {
      if (a.q1_golf_frequency) famQ1[a.q1_golf_frequency] = (famQ1[a.q1_golf_frequency] || 0) + 1;
      if (a.q2_young_children) famQ2[a.q2_young_children] = (famQ2[a.q2_young_children] || 0) + 1;
      if (a.q4_bring_child) famQ4[a.q4_bring_child] = (famQ4[a.q4_bring_child] || 0) + 1;
      if (a.q5_product_interest) famQ5[a.q5_product_interest] = (famQ5[a.q5_product_interest] || 0) + 1;
      if (Array.isArray(a.q6_important_features)) {
        a.q6_important_features.forEach((v) => { famQ6[v] = (famQ6[v] || 0) + 1; });
      }
    }
  });

  return {
    total,
    byType,
    byStatus,
    club: { q1: clubQ1, q2: clubQ2, q3: clubQ3, q4: clubQ4, q5: clubQ5 },
    family: { q1: famQ1, q2: famQ2, q4: famQ4, q5: famQ5, q6: famQ6 },
  };
}

export async function signInAdmin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOutAdmin() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getAdminSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function refreshSession() {
  const { data, error } = await supabase.auth.refreshSession();
  if (error) throw error;
  return data.session;
}
