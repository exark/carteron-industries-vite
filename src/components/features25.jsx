import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion, useAnimation } from "framer-motion";
import "./features25.css";

function FeatureCard({ title, description, image }) {
  return (
    <Card className="features25-card">
      <CardMedia
        component="img"
        image={image}
        alt={typeof title === "string" ? title : "Feature"}
        sx={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: "6px 6px 0 0",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 700, color: "#1a1a1a" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Features25(props) {
  const controls = useAnimation();

  return (
    <motion.div
      id="Features25"
      className="features25-row"
      initial={{ opacity: 0, y: 48 }}
      animate={controls}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.7, ease: [0.33, 1, 0.68, 1] }, // Apparition lente (1.7s)
      }}
      viewport={{ once: false, amount: 0.2 }}
      onViewportLeave={() =>
        controls.start({
          opacity: 0,
          y: 64,
          transition: { duration: 1.7, ease: [0.33, 1, 0.68, 1] }, // Disparition lente (1.7s)
        })
      }
    >
      <FeatureCard
        title={props.feature1Title}
        description={props.feature1Description}
        image="images/argicole.jpg"
      />
      <FeatureCard
        title={props.feature2Title}
        description={props.feature2Description}
        image="images/argicole.jpg"
      />
      <FeatureCard
        title={props.feature3Title}
        description={props.feature3Description}
        image="images/argicole.jpg"
      />
    </motion.div>
  );
}
