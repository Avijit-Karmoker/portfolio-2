import React from "react";
import Copyright from "./Copyright";
import MainFooter from "./MainFooter";

const Footer = () => {
  return (
    <section>
      <div style={{ background: "#EF233C" }}>
        <MainFooter />
        <Copyright />
      </div>
    </section>
  );
};

export default Footer;
