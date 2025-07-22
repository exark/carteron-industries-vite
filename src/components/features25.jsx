import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./features25.css";
import { useTranslation } from "react-i18next";

function FeatureCard({ title, description, image, buttonLabel }) {
  return (
    <Card className="features25-card">
      <CardMedia
        component="img"
        image={image}
        alt={typeof title === "string" ? title : "Feature"}
        sx={{
          width: "100%",
          height: 240,
          objectFit: "cover",
          borderRadius: "18px 18px 0 0",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", marginBottom: 2 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#1976D2",
            color: "#fff",
            fontWeight: 600,
            borderRadius: 2,
            textTransform: "none",
            boxShadow: "0 2px 8px rgba(32,101,209,0.10)",
            '&:hover': { background: "#2157d9" },
          }}
        >
          {buttonLabel}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Features25() {
  const { t } = useTranslation();
  return (
    <div id="Features25" className="features25-row">
      <FeatureCard
        title={t('features25.card1.title', 'Projet SmartAgri Connect')}
        description={t('features25.card1.desc', "Une plateforme connectée pour le suivi en temps réel des parcelles agricoles, l’optimisation de l’irrigation et la gestion intelligente des ressources.")}
        image="/images/argicole.jpg"
        buttonLabel={t('features25.card1.button', 'En savoir plus')}
      />
      <FeatureCard
        title={t('features25.card2.title', 'Application Mobile Bovin+')}
        description={t('features25.card2.desc', "Une application mobile dédiée à la gestion du cheptel, au suivi sanitaire et à la traçabilité des animaux pour les éleveurs modernes.")}
        image="/images/tracteur1.png"
        buttonLabel={t('features25.card2.button', 'En savoir plus')}
      />
    </div>
  );
}
