import mockQuote from "../../__mocks__/quote.json";

/**
 * Currently returns a mock quote.
 * Ideally quote would be fetched from the database (or a service) here
 * @param {string} quoteId
 */
export const getById = (quoteId) => mockQuote;

/**
 * Currently doesnt do anything, ideally this function is expected to
 * - change status to "Paid" (or relevant status based on result)
 * - store transactionReference gatewayReference in DB for future reference
 * @param {string} quoteId
 * @param {string} transactionReference
 * @param {string} gatewayReference
 */
export const changePaymentStatus = ({
  result,
  quoteId,
  transactionReference,
  gatewayReference,
}) => ({
  result,
  quoteId,
  transactionReference,
  gatewayReference,
});
