import React from "react";

import Header from "../../components/home/header";

import Depositions from "../../components/home/depositions";
import Marketing from "../../components/home/marketing";
import Support from "../../components/home/support";
import Cookies from "../../components/home/cookies";
import Newsletter from "../../components/home/newsletter";

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
