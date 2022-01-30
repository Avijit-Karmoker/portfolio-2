import React from "react";
import styles from "./Working.module.css";

const Working = () => {
  return (
    <section>
      <div className="text-center" id={styles.top}>
        <h4>My Resume</h4>
        <h1>Job Experience</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.centerLine}></div>
        <div className={styles.row} id={styles.row1}>
          <section>
            <h3>Web Designer</h3>
            <p>Company Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, tempore!
            </p>
          </section>
        </div>
        <div className={styles.row} id={styles.row2}>
          <section className={styles.section2}>
            <h3>Web Developer</h3>
            <p>Company Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, tempore!
            </p>
          </section>
        </div>
        <div className={styles.row} id={styles.row1}>
          <section>
            <h3>Youtube Marketer</h3>
            <p>Company Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, tempore!
            </p>
          </section>
        </div>
        <div className={styles.row} id={styles.row2}>
          <section className={styles.section2}>
            <h3>Digital Marketer</h3>
            <p>Company Name</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, tempore!
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Working;
