import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../../logo.svg";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    let arr = [];
    tabs.map((tab) => {
      if (tab.route === pathname) {
        tab.selected = true;
      } else {
        tab.selected = false;
      }
      arr.push(tab);
    });
    settabs(arr);
  }, [pathname]);

  const [tabs, settabs] = useState([
    {
      name: "Home",
      route: "/",
      selected: true,
    },
    {
      name: "Purpose",
      route: "/purpose",
    },
    {
      name: "RoadMap",
      route: "/roadmap",
    },
    {
      name: "FAQs",
      route: "/faqs",
    },
    {
      name: "Partnerships",
      route: "/partnerships",
    },
    {
      name: "StoryBook",
      route: "/storybook",
    },
    {
      name: "Shop",
      route: "/shop",
    },
  ]);
  const handelSelected = (idx) => {
    let arr = [];
    tabs.map((tab, index) => {
      if (index === idx) {
        tab.selected = true;
      } else {
        tab.selected = false;
      }
      arr.push(tab);
    });
    settabs(arr);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_Hamburger}>
          {showMenu ? (
            <></>
          ) : (
            <GiHamburgerMenu color="white" onClick={() => setshowMenu(true)} />
          )}
        </div>
        <div className={styles.nav}>
          <div className={styles.nav_left}>
            <img src={logo} height="75px" />
            {tabs.map((tab, idx) => {
              return (
                <Link to={tab.route} className={styles.non_decoration}>
                  <div
                    className={`${styles.navbar_items} ${
                      tab.selected && styles.selected
                    } ${styles.ripple}`}
                    onClick={() => handelSelected(idx)}
                  >
                    {tab.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={styles.nav_right}>
            <button className={`${styles.nav_right_wallet} ${styles.ripple}`}>
              Connect To Wallet
            </button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div
          className={`${styles.navItems_small} ${
            showMenu ? styles.annimate : ""
          }`}
        >
          <div className={styles.navItems_small_close}>
            <AiOutlineClose color="white" onClick={() => setshowMenu(false)} />
          </div>
          {tabs.map((tab, idx) => {
            return (
              <Link to={tab.route} className={styles.non_decoration}>
                <div
                  className={styles.navbar_items_small}
                  onClick={() => setshowMenu(false)}
                >
                  {tab.name}
                </div>
              </Link>
            );
          })}

          <div
            className={styles.navbar_items_small}
            onClick={() => setshowMenu(false)}
          >
            Connect To Wallet
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
