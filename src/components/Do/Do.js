import React from "react";
import styles from "./Do.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faLaptop, faLaptopCode, faTv } from "@fortawesome/free-solid-svg-icons";

const Do = () => {
  return (
    <section>
      <div className="container" id={styles.do}>
        <div className={styles.doText}>
          <p> What I do
          </p>
        </div>
        <div className={styles.service}>
          <p>Awesome Quality Service</p>
        </div>
        <div className={styles.services}>
          <div className="d-flex mb-5">
            <div className="d-flex align-items-center" id={styles.knowledge}>
              <div className={styles.iconDiv}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faLaptop} />
                </span>
              </div>
              <div className={styles.details}>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto illo reprehenderit modi similique rem impedit.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center" id={styles.knowledge}>
              <div className={styles.iconDiv}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </span>
              </div>
              <div className={styles.details}>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto illo reprehenderit modi similique rem impedit.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex align-items-center" id={styles.knowledge}>
              <div className={styles.iconDiv}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faBullhorn} />
                </span>
              </div>
              <div className={styles.details}>
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto illo reprehenderit modi similique rem impedit.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center" id={styles.knowledge}>
              <div className={styles.iconDiv}>
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faTv} />
                </span>
              </div>
              <div className={styles.details}>
                <h3>Video Editing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto illo reprehenderit modi similique rem impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Do;
