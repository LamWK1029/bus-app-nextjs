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

  const [windowHeight, setWindowHeight] = useState(1000);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <List
      width={"100%"}
      itemCount={props.stopInfoObjs.length}
      itemSize={100}
      height={windowHeight - 152}
    >
      {({ index, style }) => (
        <div style={style}>
          <div className="cardView">
            <Accordion
              expanded={expanded === props.stopInfoObjs[index].stop}
              onChange={handleChange(props.stopInfoObjs[index].stop)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {props.stopInfoObjs[index].name_tc}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      )}
    </List>
  );
}
