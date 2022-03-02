import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <div>
      <div className="container text-center" id={styles.mainFooter}>
        <h2>Avijit Karmoker</h2>
        <p>Dhaka, Bangladesh</p>
        <div className={styles.address}>
          <div>
            <p>+8801700633798</p>{" "}
          </div>
          <div className={styles.bar}></div>
          <div>
            <p>avijitkarmoker050919@gmail.com</p>
          </div>
        </div>
        <div className={styles.icon}>
          <ul>
            <li>
              <a
                href="//twitter.com/Avijit_94"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="//facebook.com/arbanibear.ovi"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="//youtube.com/channel/UCPfts9jbrviBNUK0hzbWrEg"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a
                href="//instagram.com/ovijitkarmoker/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="//linkedin.com/in/avijit-karmoker-745b98210"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
