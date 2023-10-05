import getBusData from "../../../api/getBusData";
import StopList from "./stopList";

export default async function Page({ params }) {
  const route = params.route[0] ? params.route[0] : "N/A";
  const bound = params.route[1]
    ? params.route[1] === "I"
      ? "inbound"
      : "outbound"
    : "N/A";
  const serviceType = params.route[2] ? params.route[2] : "N/A";

  // Get info
  const routeInfo = await getRouteInfo(route, bound, serviceType);
  const stopInfoObjs = [];
  const routeStopsId = await getBusStopList(route, bound, serviceType);
  for (const stopId of routeStopsId) {
    const stopInfoObj = await getBusStopInfo(stopId);
    stopInfoObjs.push(stopInfoObj);
  }

  return (
    <div className="Page">
      <div className="header">
        <h3>Route {route}</h3>
        <h5>{routeInfo.orig_tc + " - " + routeInfo.dest_tc}</h5>
      </div>
      <StopList
        route={route}
        serviceType={serviceType}
        stopInfoObjs={stopInfoObjs}
      />
    </div>
  );
}

async function getRouteInfo(route, bound, serviceType) {
  const routeInfo = await getBusData(
    "/v1/transport/kmb/route/" + route + "/" + bound + "/" + serviceType
  );
  return routeInfo;
}

async function getBusStopList(route, bound, serviceType) {
  const busStopObjs = await getBusData(
    "/v1/transport/kmb/route-stop/" + route + "/" + bound + "/" + serviceType
  );
  const busStopList = busStopObjs.map((busStopObj) => {
    return busStopObj.stop;
  });
  return busStopList;
}

async function getBusStopInfo(stopId) {
  const busStopObj = await getBusData("/v1/transport/kmb/stop/" + stopId);
  return busStopObj;
}
