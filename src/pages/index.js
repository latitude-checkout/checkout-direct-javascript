import { useEffect } from "react";
import { Layout } from "../components";

const HomePage = () => {
  useEffect(() => {
    window.location.href = "/cart";
  });

  return (
    <Layout>
      <Layout.Content>
        <p>Loading...</p>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
