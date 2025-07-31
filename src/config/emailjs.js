// Configuration EmailJS
// Remplacez ces valeurs par vos propres clés EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_1su0fhv', // Remplacez par votre Service ID
  TEMPLATE_ID: 'template_9ywvme8', // Remplacez par votre Template ID
  PUBLIC_KEY: 'fdc373TcQMt8_YYcC', // Remplacez par votre Public Key
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