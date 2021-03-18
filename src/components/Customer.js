import { Card } from "semantic-ui-react";

const Customer = ({ customer, shipping, billing }) => (
  <>
    <Card.Group>
      <Card fluid>
        <Card.Content>
          <Card.Header>Contact</Card.Header>
          <Card.Description>
            {customer?.firstName} {customer?.lastName}
          </Card.Description>
          <Card.Description>{customer?.email}</Card.Description>
          <Card.Description>{customer?.mobile}</Card.Description>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Shipping</Card.Header>
          <Card.Meta>
            {shipping?.description} <strong>{shipping?.amount}</strong>
          </Card.Meta>
          <Card.Description>{shipping?.address}</Card.Description>
        </Card.Content>
      </Card>

      <Card fluid>
        <Card.Content>
          <Card.Header>Billing</Card.Header>
          <Card.Description>{billing?.address}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </>
);

export default Customer;
