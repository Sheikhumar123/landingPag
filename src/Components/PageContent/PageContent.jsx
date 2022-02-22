import React from "react";
import styles from "./PageContent.module.css";
import BottomIcon from "../BottomIcon/BottomIcon";
const PageContent = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.pageContent}>
        <h1 className={styles.heading}>Rocket</h1>
        <h1 className={styles.heading2}>Landing Page</h1>

        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In impedit
          laboriosam cupiditate at consequatur totam, corrupti ratione, eius
          amet praesentium qui quis eum aspernatur eos soluta nisi inventore
          omnis eveniet!
        </div>
        <button className={`${styles.button_div} ${styles.ripple}`}>
          Show More
        </button>
      </div>
      <BottomIcon />
    </div>
  );
};

export default PageContent;
