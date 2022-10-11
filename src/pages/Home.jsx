import React from "react";
import Layout from "../component/Layout";
import Header from "../component/Header";
import From from "../component/Form";
import List from "../component/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <From />
      <List />
    </Layout>
  );
};

export default Home;
