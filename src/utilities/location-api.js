import sendRequest from "./send-request";
const BASE_URL = "/api/location";

export async function getAll() {
  return sendRequest(BASE_URL);
}
