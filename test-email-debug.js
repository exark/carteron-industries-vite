// Script de diagnostic pour tester l'envoi d'email
// Exécuter avec: node test-email-debug.js

const SUPABASE_URL = 'https://sspcfzzyzzhzffgmoefq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcGNmenp5enpoemZmZ21vZWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNjI4MTEsImV4cCI6MjA5MDczODgxMX0.bOW8SqnTSAv-ljta-4RQZ6XHjVuB7MoTqJyazM8fIMc';

async function testEmailFunction() {
  console.log('🔍 Test de la fonction Edge send-survey-confirmation\n');
  
  const url = `${SUPABASE_URL}/functions/v1/send-survey-confirmation`;
  
  console.log('📍 URL:', url);
  console.log('🔑 Anon Key:', SUPABASE_ANON_KEY.substring(0, 20) + '...\n');
  
  const payload = {
    to_email: 'test@example.com',
    user_name: 'Test User',
    survey_type_label: 'Club de Golf',
  };
  
  console.log('📦 Payload:', JSON.stringify(payload, null, 2), '\n');
  
  try {
    console.log('⏳ Envoi de la requête...\n');
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'apikey': SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(payload),
    });
    
    console.log('📊 Status:', response.status, response.statusText);
    console.log('📋 Headers:', Object.fromEntries(response.headers.entries()), '\n');
    
    const responseText = await response.text();
    console.log('📄 Response Body:', responseText, '\n');
    
    if (response.ok) {
      console.log('✅ SUCCESS! Email envoyé avec succès');
      try {
        const data = JSON.parse(responseText);
        console.log('📨 Data:', JSON.stringify(data, null, 2));
      } catch (e) {
        // Response n'est pas du JSON
      }
    } else {
      console.log('❌ ERREUR! La fonction a retourné une erreur');
      try {
        const error = JSON.parse(responseText);
        console.log('🔴 Error details:', JSON.stringify(error, null, 2));
      } catch (e) {
        console.log('🔴 Error (raw):', responseText);
      }
    }
    
  } catch (error) {
    console.log('💥 EXCEPTION:', error.message);
    console.log('Stack:', error.stack);
  }
}

testEmailFunction();
