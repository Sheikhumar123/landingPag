import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import styles from "./MainPage.module.css";
import PageContent from "../../Components/PageContent/PageContent";
import { Routes, Route } from "react-router-dom";
import Purpose from "../../Components/Purpose/Purpose";
import RoadMap from "../../Components/RoadMap/RoadMap";
import Partnerships from "../../Components/Partnerships/Partnerships";
import Shop from "../../Components/Shop/Shop";
import FAQs from "../../Components/FAQs/FAQs";
import StoryBook from "../../Components/StoryBook/StoryBook";

const MainPage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <div className={styles.pageContent}>
        <Routes>
          <Route exact path="/" element={<PageContent />} />
          <Route path="purpose" element={<Purpose />} />
          <Route path="roadmap" element={<RoadMap />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="storybook" element={<StoryBook />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
