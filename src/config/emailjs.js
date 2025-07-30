// Configuration EmailJS
// Remplacez ces valeurs par vos propres clés EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
};

// Template d'email recommandé pour EmailJS
export const EMAIL_TEMPLATE = `
Nouveau message de contact depuis le site web Carteron Industries

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Société: {{from_company}}
Site web: {{from_website}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact du site web Carteron Industries.
`; 