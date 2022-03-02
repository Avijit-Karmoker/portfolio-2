import React from "react";
import img1 from "../../images/blog1.jpeg";
import img2 from "../../images/blog2.png";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.articles}>
          <h5>My Blog</h5>
          <h1>Latest Articles</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={styles.blog}>
              <div className={styles.image}>
                <img src={img1} alt="BlogImage" />
              </div>
              <div className={styles.blogDetails}>
                <div className={styles.blogTitles}>
                  <h4>
                    Some common question on JavaScript which ask on the viva
                    board
                  </h4>
                </div>
                <div>
                  <p>
                    Here you can know about the job interview question on
                    javascript. Buy reading those question you can feel
                    confident about job interview. It may be help you to get a
                    job.
                  </p>
                </div>
                <div className={styles.button}>
                  <a href="https://ovijit.medium.com/some-common-question-on-javascript-which-ask-on-the-viva-board-80ef84282912" rel="noreferrer" target="_blank">Read more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={styles.blog}>
              <div className={styles.image}>
                <img src={img2} alt="BlogImage" />
              </div>
              <div className={styles.blogDetails}>
                <div className={styles.blogTitles}>
                  <h4>10 Important things You know About React</h4>
                </div>
                <div>
                  <p style={{marginBottom: "8%"}}>
                    By reading this article a begginer can know about react and
                    it's important things. It will be help him/her to arrenge
                    him how to start learn React. Feel free to read this
                    article.
                  </p>
                </div>
                <div className={styles.button}>
                  <a href="https://ovijit.medium.com/10-important-things-you-know-about-react-c8308853f90c" rel="noreferrer" target="_blank">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
