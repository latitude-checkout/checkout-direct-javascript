import { useEffect } from "react";
import { Card, Image } from "semantic-ui-react";

import loadContent from "./utils/loadContent";

import {
  LOGO_SRC,
  PAYMENT_CONTAINER_MAIN,
  PAYMENT_CONTAINER_FOOTER,
} from "./utils/constants";

const LatitudeInterestFree = () => {
  useEffect(() => {
    loadContent(() => console.log("Latitude content loaded."));
  }, []);

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          Latitude interest free
          <Image src={LOGO_SRC} size="small" floated="right" />
        </Card.Header>
        <Card.Description>
          <div id={PAYMENT_CONTAINER_MAIN}></div>
          <div id={PAYMENT_CONTAINER_FOOTER}></div>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default LatitudeInterestFree;
