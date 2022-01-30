import React from "react";
import image from "../../images/myImage2.png";
import styles from "./Experience.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Experience = () => {
  const now = 92;
  const now2 = 90;
  const now3 = 95;
  const now4 = 85;

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6" id={styles.image}>
            <img src={image} alt="MyImage" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6" id={styles.learnDetails}>
            <div className={styles.learnHeader}>
              <h3><span style={{fontSize: '28px', fontWeight: 'bold'}}>➡</span> Learn About Me</h3>
              <h1>2 Years of Experience</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                expedita dicta reiciendis omnis, nisi nobis ipsam natus
                assumenda magnam fugit ducimus illo, inventore consequuntur!
                Omnis dicta dolor in sint provident!
              </p>
            </div>
            <div className={styles.webDesign}>
              <p>Web Design</p>
              <ProgressBar animated now={now} label={`${now}%`} variant="danger" />
            </div>
            <div className={styles.webDevelopment}>
              <p>Web Development</p>
              <ProgressBar animated now={now2} label={`${now2}%`} variant="danger" />
            </div>
            <div className={styles.digitalMarketing}>
              <p>Digital Marketing</p>
              <ProgressBar animated now={now3} label={`${now3}%`} variant="danger" />
            </div>
            <div className={styles.videoEditing}>
              <p>Video Editing</p>
              <ProgressBar animated now={now4} label={`${now4}%`} variant="danger" />
            </div>
            <div className={styles.button}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
