import React from "react";

import "./styles.scss";

import Header from "../../components/home/header";
import MarketingSection from "../../components/home/marketing";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="_main">
        <MarketingSection />
      </main>
    </>
  );
};

export default Home;
