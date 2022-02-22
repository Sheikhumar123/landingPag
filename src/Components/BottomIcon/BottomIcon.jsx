import React from "react";
import styles from "./BottomIcon.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const BottomIcon = () => {
  return (
    <div className={styles.iconsDiv}>
      <button className={`${styles.icons} ${styles.ripple}`}>
        <div className={styles.twitter}></div>
      </button>
      <button className={`${styles.icons} ${styles.ripple}`}>
        <div className={styles.instagram}></div>
      </button>
      <button className={`${styles.icons} ${styles.ripple}`}>
        <div className={styles.opensea}></div>
      </button>
    </div>
  );
};

export default BottomIcon;
