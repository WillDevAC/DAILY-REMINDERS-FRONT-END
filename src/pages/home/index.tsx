import React from "react";

import Header from "../../components/home/header";

import MarketingSection from "../../components/home/marketing";
import SupportSection from "../../components/home/support";
import CookiesModal from "../../components/home/cookies";

import "./styles.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="_main">
        <MarketingSection />
        <SupportSection />
      </main>
      <CookiesModal/>
    </>
  );
};

export default Home;
