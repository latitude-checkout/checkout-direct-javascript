import axios from "axios";

import prepareRequest from "./prepareRequest";

import { AXIOS_CONFIG, ENDPOINTS } from "./common";

const ERROR_RESPONSE = {
  result: "failed",
  redirectUrl: "/error",
};

/**
 * Initiates request with Latitude Interest free
 * @param {object} quote
 */
export const initiatePurchase = async (quote) => {
  try {
    const data = prepareRequest(quote);
    const response = await axios.post(ENDPOINTS.PURCHASE, data, AXIOS_CONFIG);

    return response?.data;
  } catch (err) {
    return ERROR_RESPONSE;
  }
};
