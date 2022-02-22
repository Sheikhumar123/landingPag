import React from "react";
import styles from "./StoryBook.module.css";
import BottomIcon from "../BottomIcon/BottomIcon";

const StoryBook = () => {
  return (
    <div className={styles.mainDiv}>
      <div className=" py-5 row m-0 p-0">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className={styles.heading}>
            <h4>StoryBook</h4>
          </div>
          <div className={styles.hori_line}></div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            exercitationem temporibus repudiandae explicabo. Assumenda eos
            molestiae fugit ipsa, adipisci aspernatur asperiores! Veniam
            nostrum, repellendus accusantium fugiat sapiente magnam in
            assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia ut, impedit non eveniet maiores sint maxime est nam sed quo,
            placeat facilis pariatur rerum accusamus beatae debitis eligendi?
            Minus, vitae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae exercitationem temporibus repudiandae explicabo.
            Assumenda eos molestiae fugit ipsa, adipisci aspernatur asperiores!
            Veniam nostrum, repellendus accusantium fugiat sapiente magnam in
          </div>
        </div>
      </div>
      <BottomIcon />
    </div>
  );
};

export default StoryBook;
