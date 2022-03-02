import React from "react";
import design from "../../images/webDesign.png";
import development from "../../images/WebDevelopment.png";
import youtube from "../../images/youtuber.png";
import digital from "../../images/Digital.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from "./Portfolio.module.css"

const Portfolio = () => {
  return (
    <section>
      <div className="container text-center">
        <div>
          <h5 className={styles.title}>My Portfolio</h5>
          <h1 className={styles.excellentPortfolio}>My Excellent Portfolio</h1>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.all}>All</button>
          <button className={styles.design}>Web Design</button>
          <button className={styles.developer}>Web Development</button>
          <button className={styles.marketer}>Digital Marketer</button>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 col-sm-12 position-relative">
            <div className={styles.image}>
              <img src={design} alt="Web Design" />
            </div>
            <div id={styles.workName} className="shadow">
              <p>Hotel Booking Website</p>
              <a href="">+</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={styles.image}>
              <img src={development} alt="Web Development" />
            </div>
            <div id={styles.workName} className="shadow">
              <p>School Website</p>
              <a href="">+</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 position-relative mt-5">
            <div className={styles.image}>
              <img src={youtube} alt="Web Design" />
            </div>
            <div id={styles.workName} className="shadow">
              <p>Youtuber</p>
              <a href="">+</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-5">
            <div className={styles.image}>
              <img src={digital} alt="Web Development" />
            </div>
            <div id={styles.workName} className="shadow">
              <p>Digital Marketer</p>
              <a href="">+</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
