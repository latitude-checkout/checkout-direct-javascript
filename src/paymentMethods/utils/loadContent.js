import {
  MERCHANT_ID,
  SCRIPT_IDENTIFIER,
  CONTENT_SRC,
  PAYMENT_CONTAINER_MAIN,
  PAYMENT_CONTAINER_FOOTER,
} from "./constants";

const loadContent = (callback) => {
  const existingScript = document.getElementById(SCRIPT_IDENTIFIER);

  window.LatitudeCheckout = {
    page: "checkout",
    merchantId: MERCHANT_ID,
    currency: "AUD",
    container: {
      main: PAYMENT_CONTAINER_MAIN,
      footer: PAYMENT_CONTAINER_FOOTER,
    },
    checkout: {},
  };

  if (!existingScript) {
    const script = document.createElement("script");

    script.async = true;
    script.src = CONTENT_SRC;
    script.id = SCRIPT_IDENTIFIER;

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default loadContent;
