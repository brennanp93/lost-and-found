import sendRequest from "./send-request";
const BASE_URL = "/api/item";

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function create(itemData) {
  return sendRequest(BASE_URL, "POST", itemData);
}
