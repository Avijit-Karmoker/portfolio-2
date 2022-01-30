import React from "react";
import styles from "./Hire.module.css";

const Hire = () => {
  return (
    <section>
      <div className={styles.hireMe}>
        <div className={styles.container}>
          <h5>Resonable Price</h5>
          <h1>get a <span className={styles.special}>special</span> price</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae error sed asperiores, obcaecati vero deserunt sapiente sunt, possimus laboriosam eaque, quaerat quisquam porro ab voluptas consequuntur accusamus esse perferendis tempore quia. Expedita error et suscipit, consequuntur temporibus dolorum fugiat.</p>
          <a href=" " className={styles.priceButton}>Price Plan</a>
        </div>
      </div>
    </section>
  );
};

export default Hire;
