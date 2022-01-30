import React, { useEffect, useState } from "react";
import Logo from "../../images/a-1.png";
import styles from "./Nav.module.css";

const Nav = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1
        ? setStickyClass("fixed-top bg-danger shadow")
        : setStickyClass("relative");
    }
  };
  return (
    <section>
      <div style={{ borderBottom: "1px dashed #fff" }}>
        <div className={`${stickyClass}`}>
          <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid p-0">
                <a class="navbar-brand" href="/" id={styles.logo}>
                  <img src={Logo} alt="Logo" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id={styles.navItem}
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#about">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#service">
                        Service
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id={styles.navItem}
                        href="#experience"
                      >
                        Experience
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#resume">
                        Resume
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#review">
                        Review
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#team">
                        Team
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#blog">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id={styles.navItem} href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
