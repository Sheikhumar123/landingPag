import React from "react";
import styles from "./Purpose.module.css";
import BottomIcon from "../BottomIcon/BottomIcon";

const Purpose = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.main_content}>
        <div className={styles.heading}>
          <h4>Purpose</h4>
        </div>
        <div className={styles.hori_line}></div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          exercitationem temporibus repudiandae explicabo. Assumenda eos
          molestiae fugit ipsa, adipisci aspernatur asperiores! Veniam nostrum,
          repellendus accusantium fugiat sapiente magnam in assumenda. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Officia ut, impedit
          non eveniet maiores sint maxime est nam sed quo, placeat facilis
          pariatur rerum accusamus beatae debitis eligendi? Minus, vitae? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          exercitationem temporibus repudiandae explicabo. Assumenda eos
          molestiae fugit ipsa, adipisci aspernatur asperiores! Veniam nostrum,
          repellendus accusantium fugiat sapiente magnam in
        </div>
      </div>

      <BottomIcon />
    </div>
  );
};

export default Purpose;
