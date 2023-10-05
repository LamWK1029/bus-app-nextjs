"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import BasicCard from "../../components/card";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

export default function Routes(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [windowHeight, setWindowHeight] = useState(1000);
  const displayRoutes =
    search === ""
      ? props.routes
      : props.routes.filter((route) => route.route.includes(search));

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [windowHeight]);

  return (
    <div className="Page">
      {loading && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
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
      <List
        key={windowHeight}
        width={"100%"}
        itemCount={displayRoutes.length}
        itemSize={168}
        height={windowHeight - 152}
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
                actionName={"Detail"}
                action={() => {
                  setLoading(true);
                  router.push(
                    "/routes/" +
                      displayRoutes[index].route +
                      "/" +
                      displayRoutes[index].bound +
                      "/" +
                      displayRoutes[index].service_type
                  );
                }}
              />
            </div>
          </div>
        )}
      </List>
    </div>
  );
}
