import React from "react";
import Typical from "react-typical";
import styles from "./Header.module.css";
import myImage from "../../images/myImage.png";

const Header = () => {
  return (
    <section>
      <div className="container header">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="text-white" id={styles.headerText}>
              <p className="text-head">
                I'm <h1>Avijit Karmoker</h1>
              </p>
              <h2 className="text-white">
                <Typical
                  loop={Infinity}
                  wrapper="span"
                  steps={[
                    "Web Designer 💻",
                    2000,
                    "Web Developer 💻",
                    2000,
                    "Youtuber 🎥",
                    2000,
                    "Digital Marketer 💰",
                    2000,
                    "Open Sourcer",
                    2000,
                    "Music Lover 🎶",
                    2000,
                  ]}
                />
              </h2>
            </div>
            <div className={styles.buttons}>
              <button className={styles.resumeButton}>Resume</button>
              <button className={styles.contactButton}>Contact Me</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" id={styles.image}>
            <img className="float-right" src={myImage} alt="MyImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
