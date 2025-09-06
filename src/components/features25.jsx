import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "./features25.css";
import { useTranslation } from "react-i18next";

function FeatureCard({ title, description, image, buttonLabel }) {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="features25-card" 
      sx={{ 
        borderRadius: '20px !important',
        border: 'none !important',
        boxShadow: '0 8px 32px rgba(32,101,209,0.08) !important',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      onClick={() => navigate("/our-product")}
    >
      <CardMedia
        component="img"
        image={image}
        alt={typeof title === "string" ? title : "Feature"}
        sx={{
          width: "100%",
          height: 240,
          objectFit: "cover",
          borderRadius: "20px 20px 0 0",
        }}
      />
      <CardContent sx={{ 
        padding: '24px !important',
        borderRadius: '0 0 20px 20px !important',
        background: '#fff !important',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ 
              fontWeight: 700, 
              color: "#1a1a1a", 
              marginBottom: 2,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#444", marginBottom: 3 }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
          className="features25-button"
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/our-product");
            }}
            sx={{
              background: "linear-gradient(135deg, #1976D2 0%, #1565C0 100%)",
              color: "#fff",
              fontWeight: 600,
              marginBottom:0,
              borderRadius: 3,
              textTransform: "none",
              boxShadow: "0 4px 16px rgba(25,118,210,0.3)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              border: 'none !important',
              '&:hover': { 
                background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
                boxShadow: "0 8px 24px rgba(25,118,210,0.4)",
                transform: "translateY(-2px)",
                border: 'none !important'
              },
            }}
          >
            {buttonLabel}
          </Button> 
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Features25() {
  const { t } = useTranslation();
  return (
    <div id="Features25" className="features25-row">
      {/* <FeatureCard
        title={t('features25.card1.title', 'Projet SmartAgri Connect')}
        description={t('features25.card1.desc', "Une plateforme connectée pour le suivi en temps réel des parcelles agricoles, l'optimisation de l'irrigation et la gestion intelligente des ressources.")}
        image="/images/service1.jpg"
        buttonLabel={t('features25.card1.button', 'En savoir plus')}
      />
      <FeatureCard
        title={t('features25.card2.title', 'Application Mobile Bovin+')}
        description={t('features25.card2.desc', "Une application mobile dédiée à la gestion du cheptel, au suivi sanitaire et à la traçabilité des animaux pour les éleveurs modernes.")}
        image="/images/service2.png"
        buttonLabel={t('features25.card2.button', 'En savoir plus')}
      /> */}
      <FeatureCard
        title={t('features25.card3.title', 'Chariots de Golf Électriques')}
        description={t('features25.card3.desc', "Conçus pour les golfeurs exigeants, nos chariots électriques allient performance, autonomie et ergonomie. Développés avec une motorisation silencieuse et une navigation intuitive, ils améliorent l'expérience sur le green.")}
        image="/images/serivce3.jpg"
        buttonLabel={t('features25.card3.button', 'En savoir plus')}
      />
      <FeatureCard
        title={t('features25.card4.title', 'Poussette & Chariot Golf Hybride 2-en-1')}
        description={t('features25.card4.desc', "Une innovation unique : un chariot hybride pensé pour les jeunes parents actifs, combinant les fonctions d'une poussette et d'un chariot de golf motorisé. Idéal pour concilier sport et famille sans compromis.")}
        image="/images/service4.jpg"
        buttonLabel={t('features25.card4.button', 'En savoir plus')}
      />
    </div>
  );
}
