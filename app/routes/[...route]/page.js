import getBusData from "../../../api/getBusData";

export default async function Page({ params }) {
  const route = params.route[0] ? params.route[0] : "N/A";
  const bound = params.route[1]
    ? params.route[1] === "I"
      ? "inbound"
      : "outbound"
    : "N/A";
  const serviceType = params.route[2] ? params.route[2] : "N/A";

  const routeInfo = await getBusData(
    "/v1/transport/kmb/route/" + route + "/" + bound + "/" + serviceType
  );
  console.log("routeInfo", routeInfo);

  return <div className="Page">Route: {route}</div>;
}

async function getBusRouteInfo(route, direction, service_type) {
  const endpoint =
    "/v1/transport/kmb/route/" + route + "/" + direction + "/" + service_type;

  console.log("endpoint", data);
  const data = getBusData(endpoint);
  return nil;
}
