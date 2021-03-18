import { useState } from "react";
import { Button, Header } from "semantic-ui-react";
import axios from "axios";

import { Customer, Cart, Layout } from "../components";
import { LatitudeInterestFree } from "../paymentMethods";
import { PAYMENT_TYPE } from "../core/constants";

import mockQuote from "../__mocks__/quote.json";

const PayNow = ({ quoteId }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const { data } = await axios.post("/api/checkout", {
      quoteId,
      paymentType: PAYMENT_TYPE.LATITUDE_INTEREST_FREE,
    });

    window.location.href = data?.redirectUrl;
  };

  return (
    <Button secondary size="big" loading={loading} onClick={handleClick}>
      Complete order
    </Button>
  );
};

const CartPage = () => {
  // Currently uses a mock, ideally this method gets quote from your backend apis
  const quote = mockQuote;

  return (
    <Layout>
      <Layout.Summary>
        <Cart
          lineItems={quote?.lineItems}
          shippingAmount={quote?.shipping?.amount}
          totalAmount={quote?.total}
        />
      </Layout.Summary>

      <Layout.Content>
        <Customer
          customer={quote?.customer}
          shipping={quote?.shipping}
          billing={quote?.billing}
        />

        <Header>Payment</Header>

        <LatitudeInterestFree />

        <PayNow quoteId={quote?.id} />
      </Layout.Content>
    </Layout>
  );
};

export default CartPage;
