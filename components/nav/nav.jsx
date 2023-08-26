/** @format */

import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "ABOUT", link: "/about/page" },
    { name: "PROCEDURES", link: "/procedures/surgeryMovingHighlight" },
    { name: "FAQ", link: "#faq" },
    { name: "RESOURCES", link: "/resources/pop_cosmeticsurgery/popup_allSurgeries" },
    { name: "QUOTE", link: "#quote" },
    { name: "PRICING", link: "#pricing" },
    { name: "PROMO", link: "#promo" },
    { name: "CONTACTS", link: "#contacts" }, // Add this line
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/home/page" passHref>
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="logo cursor-pointer"
          />
        </Link>
        <div className={styles.hamburger}>
          {menuItems.map((item, index) => (
            <Link
              href={
                item.link ||
                `#${item.name?.toLowerCase() || item.toLowerCase()}`
              }
              key={index}
              passHref
            >
              <span
                className={`${styles.navItem} 
              ${
                item.name === "CONTACTS"
                  ? `${styles.contacts} ${styles.sign} ${styles.link} ${styles.ledGlow}`
                  : ""
              }`}
              >
                {item.name || item}
              </span>
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-1 w-6 mb-1 bg-white"></div>
          <div className="h-1 w-6 mb-1 bg-white"></div>
          <div className="h-1 w-6 bg-white"></div>
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.navItemHamburger}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={
                item.link ||
                `#${item.name?.toLowerCase() || item.toLowerCase()}`
              }
              passHref
              legacyBehavior
            >
              <span
                className={`${styles.navItem} ${
                  item.name === "CONTACTS" ? styles.ledGlow : ""
                }`}
                onMouseOver={(e) => {
                  e.target.style.textShadow = "2px 2px 4px #2119B4";
                }}
                onMouseOut={(e) => {
                  e.target.style.textShadow = "1px 1px 2px rgba(0,0,0,0.3)";
                }}
              >
                {item.name || item}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
