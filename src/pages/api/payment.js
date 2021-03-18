import * as quoteService from "../../services/quote";
import * as latitudeService from "../../services/latitude";

import { PAYMENT_TYPE } from "../../core/constants";

const handlePost = async (req, res) => {
  const {
    paymentType,
    merchantReference,
    transactionReference,
    gatewayReference,
  } = req?.body || {};

  if (
    !paymentType ||
    !merchantReference ||
    !transactionReference ||
    !gatewayReference
  ) {
    res.status(400).end("Missing required params");
    return;
  }

  switch (paymentType) {
    case PAYMENT_TYPE.LATITUDE_INTEREST_FREE:
      // verify whether quote exists in your DB
      const quote = quoteService.getById(merchantReference);

      if (!quote.id) {
        res.status(400).end(`Quote ${merchantReference} not found`);
        return;
      }

      // verify payment with Latitude
      const { result } = await latitudeService.verifyPurchase({
        merchantReference,
        transactionReference,
        gatewayReference,
      });

      // change payment status in DB (or similar)
      quoteService.changePaymentStatus({
        quoteId: merchantReference,
        result,
        transactionReference,
        gatewayReference,
      });

      res.status(200).json({ result });
      break;

    // Other payment methods here

    default:
      res.status(403).end(`Payment method ${paymentType} not supported`);
      break;
  }
};

const handleDefault = (req, res) => {
  const { method } = req;
  res.setHeader("Allow", Object.keys(handlers));
  res.status(405).end(`Method ${method} not allowed`);
};

const handlers = {
  POST: handlePost,
  default: handleDefault,
};

export default async (req, res) =>
  (handlers[req.method] || handlers.default)(req, res);
