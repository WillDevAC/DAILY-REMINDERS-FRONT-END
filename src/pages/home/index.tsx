import React from "react";

import Header from "../../components/home/header";

import Depositions from "../../components/home/depositions-section";
import Marketing from "../../components/home/marketing-section";
import Support from "../../components/home/support-section";
import Cookies from "../../components/home/cookies-popover";
import Newsletter from "../../components/home/newsletter-section";

import Footer from "../../components/home/footer";

import "./styles.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="_main">
        <Marketing />
        <Support />
        <Depositions />
        <Newsletter/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
