import React from "react";
import { getReq } from "../api/request";
import Routes from "./routes/page";

export default async function Page() {
  const routes = await getKmbBusRouteData();

  return <Routes routes={routes} />;
}

// getBusRouteData
async function getKmbBusRouteData() {
  const url = "https://data.etabus.gov.hk/v1/transport/kmb/route/";
  const data = await getReq(url);
  return data.data;
}
