import { Card, Header } from "semantic-ui-react";

const Cart = ({ lineItems = [], shippingAmount, totalAmount }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Order Summary</Card.Header>
        <Card.Meta>{lineItems.length} product(s)</Card.Meta>
      </Card.Content>

      {lineItems.map(({ quantity, title, totalPrice, color, size }) => (
        <Card.Content key={title}>
          <Header as="h5" floated="left">
            {quantity} x {title}
          </Header>
          <Header as="h5" floated="right">
            ${totalPrice}
          </Header>
          <Card.Description>Color - {color}</Card.Description>
          <Card.Description>Size - {size}</Card.Description>
        </Card.Content>
      ))}

      <Card.Content>
        <Header as="h5" floated="left">
          Shipping
        </Header>
        <Header as="h5" floated="right">
          ${shippingAmount}
        </Header>
      </Card.Content>

      <Card.Content>
        <Header as="h3" floated="left">
          Total
          <Header.Subheader>Inclusive of taxes</Header.Subheader>
        </Header>
        <Header as="h3" floated="right">
          ${totalAmount}
        </Header>
      </Card.Content>
    </Card>
  );
};

export default Cart;
