import React from "react";
import { Container, Grid, Header, Menu } from "semantic-ui-react";

const Layout = ({ children }) => (
  <Container>
    <Menu fixed="top" inverted pointing size="large">
      <Container>
        <Header
          inverted
          as="h2"
          icon
          textAlign="center"
          style={{ paddingTop: "10px" }}
        >
          Example JS Store
        </Header>
      </Container>
    </Menu>

    <Grid reversed="computer" stackable style={{ marginTop: "4em" }}>
      <Grid.Row columns={2}>{children}</Grid.Row>
    </Grid>
  </Container>
);

const Sidebar = ({ children }) => (
  <Grid.Column width={6}>{children}</Grid.Column>
);

const Content = ({ children }) => (
  <Grid.Column width={10}>{children}</Grid.Column>
);

Layout.Summary = Sidebar;
Layout.Content = Content;

export default Layout;
