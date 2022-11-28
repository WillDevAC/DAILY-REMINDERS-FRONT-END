import React from "react";

import Header from "../../components/home/header";
import MarketingSection from "../../components/home/marketing";
import CookiesModal from "../../components/home/cookies";

import "./styles.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="_main">
        <MarketingSection />
      </main>
      <CookiesModal/>
    </>
  );
};

export default Home;
