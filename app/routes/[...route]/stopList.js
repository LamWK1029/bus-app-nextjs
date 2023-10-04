"use client";

import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function StopList(props) {
  console.log(props.stopInfoObjs);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const stopItems = props.stopInfoObjs.map((stopInfoObj) => {
    return (
      <Accordion
        sx={{ width: "95vw" }}
        expanded={expanded === stopInfoObj.stop}
        onChange={handleChange(stopInfoObj.stop)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          key={stopInfoObj.stop}
        >
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
            {stopInfoObj.name_tc}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{stopInfoObj.name_en}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return <div>{stopItems}</div>;
}
