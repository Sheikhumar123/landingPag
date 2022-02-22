import React from "react";
import styles from "./Partnerships.module.css";

import BottomIcon from "../BottomIcon/BottomIcon";

const Partnerships = () => {
  return (
    <div className={styles.mainDiv}>
      <div className="container pt-5">
        <div className={styles.heading}>
          <h4>Partners</h4>
        </div>
        <div className={styles.hori_line}></div>
        <div className={styles.cards_div}>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className={`${styles.btn_detail} ${styles.ripple}`}>
                See Detail
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className={`${styles.btn_detail} ${styles.ripple}`}>
                See Detail
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className={`${styles.btn_detail} ${styles.ripple}`}>
                See Detail
              </button>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className={`${styles.btn_detail} ${styles.ripple}`}>
                See Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomIcon />
    </div>
  );
};

export default Partnerships;
