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
import "./contact-form3.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
  accept: false,
};

export default function ContactForm3() {
  const [form, setForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  // Regex validations
  const validators = {
    name: {
      test: (v) => /^[\p{L}\s'-]{2,}$/u.test(v),
      msg: "Entrez un nom/prénom valide (au moins 2 lettres, lettres, tirets, espaces).",
    },
    email: {
      test: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
      msg: "Entrez une adresse mail valide.",
    },
    phone: {
      test: (v) =>
        v === "" ||
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?){1,3}\d{3,8}$/.test(v),
      msg: "Entrez un numéro valide (ex: +216 99 123 456 ou 0612345678).",
    },
    website: {
      test: (v) =>
        v === "" ||
        /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(v),
      msg: "Entrez une URL valide (https://monsite.com) ou laissez vide.",
    },
    company: {
      test: (v) => v.length === 0 || v.length >= 2,
      msg: "Nom de société trop court.",
    },
    message: {
      test: (v) => v.length >= 10,
      msg: "Le message doit contenir au moins 10 caractères.",
    },
    accept: {
      test: (v) => !!v,
      msg: "Vous devez accepter les conditions.",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validateAll();
    if (Object.keys(newErrors).length === 0) {
      // Envoyer le formulaire ici (API, etc.)
      alert("Formulaire envoyé avec succès !");
      setForm(initialState);
      setTouched({});
      setErrors({});
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-form3-root">
      <div className="contact-form3-container">
        {/* Image (gauche) */}
        <div className="contact-form3-imgbox">
          <img
            src="/images/tracteur1.png"
            alt="Contact"
            className="contact-form3-img"
          />
        </div>

        {/* Formulaire (droite) */}
        <div className="contact-form3-paper">
          <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
            Get in touch with us
          </Typography>
          <Typography variant="h4" fontWeight={700} mb={1}>
            Contact us
          </Typography>
          <Typography variant="body1" mb={2}>
            Our team will respond as soon as possible.
          </Typography>
          <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Name"
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
                  label="Email"
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
                  label="Phone"
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
                  label="Company"
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
                  label="Website"
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
                  label="Message"
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
                  label="J’accepte les conditions d’utilisation et la politique de confidentialité"
                />
                {!!errors.accept && (touched.accept || submitted) && (
                  <Typography
                    variant="caption"
                    color="error"
                    className="accept-error"
                    sx={{ display: "block", mt: -1.5, mb: 1 }}
                  >
                    {errors.accept}
                  </Typography>
                )}
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
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
