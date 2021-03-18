import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Container, Loader, Message, Icon } from "semantic-ui-react";

import { PAYMENT_TYPE } from "../../core/constants";
import { Layout } from "../../components";

const MESSAGES = {
  LOADING: "Please wait while we complete your order ..",
  INVALID_REQUEST:
    "Your request does not look correct. Please go back to cart and try again.",
  COMPLETED: "Thank you. Your order was approved.",
  FAILED: "Sorry, we could not process your order.",
};

const CompletePage = () => {
  const router = useRouter();
  const [message, setMessage] = useState(null);

  const {
    merchantReference = "",
    transactionReference = "",
    gatewayReference = "",
  } = router?.query;

  useEffect(() => {
    const completeOrder = async () => {
      if (!merchantReference || !transactionReference || !gatewayReference) {
        return;
      }

      try {
        const { data } = await axios.post("/api/payment", {
          paymentType: PAYMENT_TYPE.LATITUDE_INTEREST_FREE,
          merchantReference,
          transactionReference,
          gatewayReference,
        });

        const msg =
          data?.result === "completed" ? MESSAGES.COMPLETED : MESSAGES.FAILED;

        setMessage(msg);
      } catch (err) {
        console.error(err);
        setMessage(MESSAGES.INVALID_REQUEST);
      }
    };

    completeOrder();
  }, [merchantReference, transactionReference, gatewayReference]);

  return (
    <Layout>
      <Container textAlign="center">
        {!message && <Loader active inline="centered" />}

        {message && (
          <>
            <Message>
              <Message.Content>{message}</Message.Content>
            </Message>
            <Button
              basic
              color="blue"
              onClick={() => {
                window.location.href = "/cart";
              }}
            >
              Back to cart.
            </Button>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default CompletePage;
