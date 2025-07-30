# Configuration EmailJS pour l'envoi d'emails

## Étape 1 : Créer un compte EmailJS

1. Allez sur [EmailJS.com](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

## Étape 2 : Configurer un service d'email

1. Dans votre dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** généré

## Étape 3 : Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```html
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Téléphone:</strong> {{from_phone}}</p>
<p><strong>Société:</strong> {{from_company}}</p>
<p><strong>Site web:</strong> {{from_website}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>Ce message a été envoyé depuis le formulaire de contact du site web Carteron Industries.</em></p>
```

4. Sauvegardez le template et notez le **Template ID**

## Étape 4 : Récupérer votre clé publique

1. Allez dans "Account" > "API Keys"
2. Copiez votre **Public Key**

## Étape 5 : Configurer le projet

1. Ouvrez le fichier `src/config/emailjs.js`
2. Remplacez les valeurs par vos clés :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'votre_service_id_ici',
  TEMPLATE_ID: 'votre_template_id_ici', 
  PUBLIC_KEY: 'votre_public_key_ici',
};
```

## Étape 6 : Tester

1. Lancez votre application : `npm run dev`
2. Allez sur la page de contact
3. Remplissez et envoyez le formulaire
4. Vérifiez que vous recevez bien l'email

## Variables disponibles dans le template

- `{{from_name}}` : Nom du contact
- `{{from_email}}` : Email du contact  
- `{{from_phone}}` : Téléphone du contact
- `{{from_company}}` : Société du contact
- `{{from_website}}` : Site web du contact
- `{{message}}` : Message du contact

## Plan gratuit EmailJS

- 200 emails par mois
- Support des templates
- Intégration facile
- Pas de backend requis

## Sécurité

- Les clés EmailJS sont publiques et sécurisées
- Aucune donnée sensible n'est exposée
- EmailJS respecte le RGPD 