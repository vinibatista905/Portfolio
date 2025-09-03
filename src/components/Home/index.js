import React from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
