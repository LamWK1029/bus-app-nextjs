import React from "react";
import Routes from "./routes/page";
import getBusData from "../api/getBusData";

export default async function Page() {
  const routes = await getKmbBusRouteData();

  return <Routes routes={routes} />;
}

// getBusRouteData
async function getKmbBusRouteData() {
  const endpoint = "/v1/transport/kmb/route/";
  return getBusData(endpoint);
}
