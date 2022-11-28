import React from "react";

import Header from "../../components/home/header";
import MarketingSection from "../../components/home/marketing";

import "./styles.scss";

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
