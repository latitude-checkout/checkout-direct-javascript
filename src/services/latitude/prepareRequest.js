import { STORE_BASE_URL, MERCHANT_ID, IS_PRODUCTION } from "./common";

export default (quote) => ({
  merchantId: MERCHANT_ID,
  merchantName: "example-store-javascript",
  isTest: !Boolean(IS_PRODUCTION),
  merchantReference: quote.id,
  amount: quote.total,
  currency: quote.currency,
  customer: {
    firstName: quote.customer.firstName,
    lastName: quote.customer.lastName,
    phone: quote.customer.mobile,
    email: quote.customer.email,
  },
  shippingAddress: {
    name: `${quote.customer.firstName} ${quote.customer.lastName}`,
    line1: quote.shipping.line1,
    line2: quote.shipping.line2,
    city: quote.shipping.city,
    postcode: quote.shipping.postCode,
    state: quote.shipping.state,
    countryCode: quote.shipping.countryCode,
    phone: quote.shipping.phone,
  },
  billingAddress: {
    name: `${quote.customer.firstName} ${quote.customer.lastName}`,
    line1: quote.billing.line1,
    line2: quote.billing.line2,
    city: quote.billing.city,
    postcode: quote.billing.postCode,
    state: quote.billing.state,
    countryCode: quote.billing.countryCode,
    phone: quote.billing.phone,
  },
  merchantUrls: {
    cancel: `${STORE_BASE_URL}/cart`,
    complete: `${STORE_BASE_URL}/payment/latitude`,
  },
  orderLines: quote.lineItems.map((item) => ({
    name: item.title,
    productUrl: item.imageUrl,
    sku: item.sku,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    amount: item.totalPrice,
    tax: item.tax.amount,
    requiresShipping: item.requiresShipping,
    isGiftCard: item.isGiftCard,
  })),
  totalShippingAmount: quote.shipping.amount,
  totalTaxAmount: quote.tax.amount,
  totalDiscountAmount: quote.discount.amount,
  platformType: "direct",
  platformVersion: "0.0.1",
});
