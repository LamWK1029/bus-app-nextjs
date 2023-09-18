"use client";

import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import BasicCard from "../../components/card";
import TextField from "@mui/material/TextField";

export default function Routes(props) {
  const [search, setSearch] = useState("");
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const displayRoutes =
    search === ""
      ? props.routes
      : props.routes.filter((route) => route.route.includes(search));

  return (
    <div className="routesPage">
      <div className="header">
        <h1>Routes</h1>
        <TextField
          id="searchField"
          size="small"
          label="Search"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* react-window */}
      <List
        width={"100%"}
        itemCount={displayRoutes.length}
        itemSize={168}
        height={windowHeight - 100}
      >
        {({ index, style }) => (
          <div style={style}>
            <div className="cardView">
              <BasicCard
                key={index}
                title={"KMB"}
                subtitle={displayRoutes[index].route}
                description={
                  displayRoutes[index].orig_tc +
                  " - " +
                  displayRoutes[index].dest_tc
                }
              />
            </div>
          </div>
        )}
      </List>
    </div>
  );
}
