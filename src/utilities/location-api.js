import sendRequest from "./send-request";
const BASE_URL = "/api/location";

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function filter(state, county, city){
  console.log(state, county, "API")
  // console.log(`${BASE_URL}/${filterObj.state}/${filterObj.county}/${filterObj.city}`)
  return sendRequest(`${BASE_URL}/${state.state}/${county?.county}/${city?.city}` )
}
