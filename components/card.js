import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ width: "95%", m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.subtitle}
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            alert("clicked");
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
