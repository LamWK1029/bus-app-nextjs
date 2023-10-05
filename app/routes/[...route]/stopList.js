"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skeleton from "@mui/material/Skeleton";

export default function StopList(props) {
  const [expanded, setExpanded] = useState(false);
  const [eta, setEta] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    const baseUrl = "https://data.etabus.gov.hk";
    const url =
      baseUrl +
      "/v1/transport/kmb/eta/" +
      panel +
      "/" +
      props.route +
      "/" +
      props.serviceType;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const remainingTimes = [];
        data.data.forEach((schedule) => {
          const currentTime = new Date();
          const etaTime = new Date(schedule.eta);
          const remainingTime = etaTime - currentTime;

          let remainingTimeInMinutes = Math.floor(remainingTime / 60000);
          if (remainingTimeInMinutes > 0) {
            remainingTimes.push(remainingTimeInMinutes + 1);
          } else {
            remainingTimes.push(0);
          }
        });
        for (let i = 1; i < remainingTimes.length; i++) {
          if (remainingTimes[i] < remainingTimes[i - 1]) {
            remainingTimes.splice(i);
            break;
          }
        }
        setEta(remainingTimes);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    setExpanded(isExpanded ? panel : false);
  };

  const remainingTimeItems = eta.map((remainingTime, index) => {
    return (
      <li key={index}>
        {remainingTime > 0 ? remainingTime + " min" : "Arrived"}
      </li>
    );
  });

  const stopItems = props.stopInfoObjs.map((stopInfoObj, index) => {
    return (
      <Accordion
        key={stopInfoObj.stop}
        sx={{ width: "95vw" }}
        expanded={expanded === stopInfoObj.stop}
        onChange={handleChange(stopInfoObj.stop)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + index + "bh-content"}
          id={"panel" + index + "bh-header"}
        >
          <Typography sx={{ width: "80%", flexShrink: 0 }}>
            {index + 1 + ". " + stopInfoObj.name_tc}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {remainingTimeItems ? <ul>{remainingTimeItems}</ul> : <Skeleton />}
        </AccordionDetails>
      </Accordion>
    );
  });

  return <div>{stopItems}</div>;
}
