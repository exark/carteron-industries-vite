import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Fade } from "@mui/material";
import "./contact-form3.css";
import { useTranslation } from "react-i18next";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
  accept: true,
};

export default function ContactForm3() {
  const { t } = useTranslation();
  const [form, setForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(() => setModalOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  // Regex validations
  const validators = {
    name: {
      test: (v) => /^[\p{L}\s'-]{2,}$/u.test(v),
      msg: t('contact_form.name_error', 'Entrez un nom/prénom valide (au moins 2 lettres, lettres, tirets, espaces).'),
    },
    email: {
      test: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
      msg: t('contact_form.email_error', 'Entrez une adresse mail valide.'),
    },
    phone: {
      test: (v) =>
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?){1,3}\d{3,8}$/.test(v),
      msg: t('contact_form.phone_error_required', 'Le numéro de téléphone est obligatoire et doit être valide (ex: +216 99 123 456 ou 0612345678).'),
    },
    website: {
      test: (v) =>
        v === "" ||
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(v),
      msg: t('contact_form.website_error', 'Entrez une URL valide (https://monsite.com) ou laissez vide.'),
    },
    company: {
      test: (v) => v.length === 0 || v.length >= 2,
      msg: t('contact_form.company_error', 'Nom de société trop court.'),
    },
    message: {
      test: (v) => v.length >= 10,
      msg: t('contact_form.message_error', 'Le message doit contenir au moins 10 caractères.'),
    },
    accept: {
      test: (v) => !!v,
      msg: t('contact_form.accept_error', 'Vous devez accepter les conditions.'),
    },
  };

  // Validation on field
  const validateField = (name, value) => {
    if (validators[name]) {
      return validators[name].test(value) ? "" : validators[name].msg;
    }
    return "";
  };

  // Validate all fields
  const validateAll = () => {
    const newErrors = {};
    Object.keys(validators).forEach((k) => {
      const error = validateField(k, form[k]);
      if (error) newErrors[k] = error;
    });
    setErrors(newErrors);
    return newErrors;
  };

  // Handle field change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, type === "checkbox" ? checked : value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, type === "checkbox" ? checked : value),
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validateAll();
    if (Object.keys(newErrors).length === 0) {
      try {
        // Préparer les données pour l'email
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          from_company: form.company || 'Non spécifié',
          from_website: form.website || 'Non spécifié',
          message: form.message,
          to_name: 'Carteron Industries',
        };

        // Envoyer l'email via EmailJS
        const result = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        console.log('Email envoyé avec succès:', result);
        setModalOpen(true);
        setForm(initialState);
        setTouched({});
        setErrors({});
        setSubmitted(false);
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        // Vous pouvez ajouter ici une notification d'erreur
        alert(t('contact_form.email_error_send', 'Erreur lors de l\'envoi du message. Veuillez réessayer.'));
      }
    }
  };

  const isSmallScreen = useMediaQuery("(max-width:900px)");
  
  return (
    <div className="contact-form3-root">
      <div className="contact-form3-container">
        {/* Image (gauche) */}
        <Fade in={!isSmallScreen} timeout={400} unmountOnExit>
          <div className="contact-form3-imgbox">
            <img
              src="/images/terrein1.webp"
              alt="Contact entreprise"
              className="contact-form3-img"
            />
            <div className="contact-form3-caption">
              {t('contact_form.left_caption', 'Prenez contact avec notre équipe ! Nous sommes à votre écoute pour tous vos projets.')}
            </div>
          </div>
        </Fade>

        {/* Formulaire (droite) */}
        <div className="contact-form3-paper">
          <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
            {t('contact_form.subtitle', 'Get in touch with us')}
          </Typography>
          <Typography variant="h4" fontWeight={700} mb={1}>
            {t('contact_form.title', 'Contact us')}
          </Typography>
          <Typography variant="body1" mb={2}>
            {t('contact_form.desc', 'Our team will respond as soon as possible.')}
          </Typography>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label={t('contact_form.name', 'Name')}
                  name="name"
                  variant="outlined"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.name && (touched.name || submitted)}
                  helperText={
                    !!errors.name && (touched.name || submitted)
                      ? errors.name
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label={t('contact_form.email', 'Email')}
                  name="email"
                  variant="outlined"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.email && (touched.email || submitted)}
                  helperText={
                    !!errors.email && (touched.email || submitted)
                      ? errors.email
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label={t('contact_form.phone', 'Téléphone')}
                  name="phone"
                  variant="outlined"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.phone && (touched.phone || submitted)}
                  helperText={
                    !!errors.phone && (touched.phone || submitted)
                      ? errors.phone
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t('contact_form.company', 'Société')}
                  name="company"
                  variant="outlined"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.company && (touched.company || submitted)}
                  helperText={
                    !!errors.company && (touched.company || submitted)
                      ? errors.company
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t('contact_form.website', 'Site web')}
                  name="website"
                  variant="outlined"
                  value={form.website}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.website && (touched.website || submitted)}
                  helperText={
                    !!errors.website && (touched.website || submitted)
                      ? errors.website
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label={t('contact_form.message', 'Message')}
                  name="message"
                  variant="outlined"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.message && (touched.message || submitted)}
                  helperText={
                    !!errors.message && (touched.message || submitted)
                      ? errors.message
                      : " "
                  }
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="accept"
                      checked={form.accept}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="custom-checkbox"
                      required
                    />
                  }
                  label={t('contact_form.accept', 'J’accepte les conditions d’utilisation et la politique de confidentialité')}
                />
                {!!errors.accept && (touched.accept || submitted) && (
                  <Typography
                    variant="caption"
                    color="error"
                    className="accept-error"
                    sx={{ display: "block", mt: -1.5, mb: 1 }}
                  >
                    {t('contact_form.accept_error', 'Vous devez accepter les conditions d\'utilisation et la politique de confidentialité.')}
                  </Typography>
                )}
                <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                  {t('contact_form.accept_info', 'En soumettant ce formulaire, vous acceptez notre ')}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">{t('footer.privacy')}</a>.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="custom-btn"
                  disabled={
                    Object.values(errors).some((v) => v) ||
                    !form.accept ||
                    !form.name ||
                    !form.email ||
                    !form.message
                  }
                >
                  {t('contact_form.send_message', 'Send Message')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-success-title"
        aria-describedby="modal-success-desc"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}
      >
        <div style={{
          background: '#fff',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(11,34,68,0.18)',
          padding: '48px 36px 36px 36px',
          minWidth: 340,
          minHeight: 260,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <CheckCircleIcon
            sx={{
              fontSize: 80,
              color: '#0b2244',
              mb: 2,
              animation: 'pop 0.7s cubic-bezier(.4,2,.6,1)',
            }}
            className="success-pop-anim"
          />
          <h2 id="modal-success-title" style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: '#0b2244',
            margin: 0,
            textAlign: 'center',
          }}>{t('contact_form.success', 'Formulaire envoyé avec succès !')}</h2>
        </div>
      </Modal>
    </div>
  );
}
