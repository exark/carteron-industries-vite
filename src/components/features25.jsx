import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './features25.css';

function FeatureCard({ title, description, image }) {
  return (
    <Card className="features25-card" sx={{ maxWidth: 320, flex: "1 1 0" }}>
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
  return (
    <div id="Features25" className="features25-row">
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
    </div>
  );
}
