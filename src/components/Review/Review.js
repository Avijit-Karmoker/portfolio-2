import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Review.module.css";
import img from "../../images/round-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <section>
      <div style={{ backgroundColor: "#EF233C" }}>
        <div className="container">
          <div className={styles.reviewDiv}>
            <h1 className="text-center text-white">Client Review</h1>
            <div className={styles.review}>
              <Carousel>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className={styles.quote}>
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>
                    <div className={styles.customersTalk}>
                      <p className={styles.customersP}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto corrupti labore dolores et nemo sit nobis
                        impedit facere repellendus aspernatur! Perferendis id
                        dolores dolor architecto porro illo quia omnis est?
                      </p>
                      <div className={styles.about}>
                        <div className={styles.customerImage}>
                          <img
                            className="d-block"
                            src={img}
                            alt="First slide"
                          />
                        </div>
                        <div className={styles.name}>
                          <p id={styles.name}>Kipras</p>
                          <p style={{color: '#8F8F8F'}} className="fst-italic">Senior Backend Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className={styles.quote}>
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>
                    <div className={styles.customersTalk}>
                      <p className={styles.customersP}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto corrupti labore dolores et nemo sit nobis
                        impedit facere repellendus aspernatur! Perferendis id
                        dolores dolor architecto porro illo quia omnis est?
                      </p>
                      <div className={styles.about}>
                        <div className={styles.customerImage}>
                          <img
                            className="d-block"
                            src={img}
                            alt="First slide"
                          />
                        </div>
                        <div className={styles.name}>
                          <p id={styles.name}>Quintin Lake</p>
                          <p style={{color: '#8F8F8F'}} className="fst-italic">Senior Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className={styles.quote}>
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>
                    <div className={styles.customersTalk}>
                      <p className={styles.customersP}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto corrupti labore dolores et nemo sit nobis
                        impedit facere repellendus aspernatur! Perferendis id
                        dolores dolor architecto porro illo quia omnis est?
                      </p>
                      <div className={styles.about}>
                        <div className={styles.customerImage}>
                          <img
                            className="d-block"
                            src={img}
                            alt="First slide"
                          />
                        </div>
                        <div className={styles.name}>
                          <p id={styles.name}>Quintin Lake</p>
                          <p style={{color: '#8F8F8F'}} className="fst-italic">SeniorFull Stack Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex">
                    <div className={styles.quote}>
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                    </div>
                    <div className={styles.customersTalk}>
                      <p className={styles.customersP}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto corrupti labore dolores et nemo sit nobis
                        impedit facere repellendus aspernatur! Perferendis id
                        dolores dolor architecto porro illo quia omnis est?
                      </p>
                      <div className={styles.about}>
                        <div className={styles.customerImage}>
                          <img
                            className="d-block"
                            src={img}
                            alt="First slide"
                          />
                        </div>
                        <div className={styles.name}>
                          <p id={styles.name}>Jhankar Mahabub</p>
                          <p style={{color: '#8F8F8F'}} className="fst-italic">Senior Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
