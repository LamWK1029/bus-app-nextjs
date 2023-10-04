import { getReq } from "./request";

export default async function getBusData(endpoint) {
  const baseUrl = "https://data.etabus.gov.hk";
  const url = baseUrl + endpoint;

  const data = await getReq(url);
  return data.data;
}
