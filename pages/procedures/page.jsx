/** @format */

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; // Import the Link component
import styles from "./procedurePage.module.css";

export default function ProceduresCard() {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const fitTitle = () => {
    const container = containerRef.current;
    const titleElement = titleRef.current;

    if (!container || !titleElement) return;

    titleElement.style.fontSize = "3rem"; // Starting font size
    titleElement.style.letterSpacing = "normal"; // Reset letter spacing

    const containerWidth = container.offsetWidth;
    const textWidth = titleElement.offsetWidth;

    if (textWidth >= containerWidth) {
      const scalingFactor = containerWidth / textWidth;
      const newFontSize =
        parseFloat(window.getComputedStyle(titleElement).fontSize) *
        scalingFactor;
      const newLetterSpacing =
        (containerWidth - textWidth * scalingFactor) /
        (titleElement.textContent.length - 1);

      titleElement.style.fontSize = `${newFontSize}px`;
      titleElement.style.letterSpacing = `${newLetterSpacing}px`;
    }
  };

  const [highlightRow, setHighlightRow] = useState(0);

  useEffect(() => {
    // Cycle through highlight rows every 3 seconds
    const highlightInterval = setInterval(() => {
      setHighlightRow((prevRow) => (prevRow + 1) % 4);
    }, 1500);

    return () => clearInterval(highlightInterval);
  }, []);

  useEffect(() => {
    fitTitle();
    window.addEventListener("resize", fitTitle);

    return () => window.removeEventListener("resize", fitTitle);
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url('/images/procedures-legs.png')",
      }}
    >
      <div className={styles.procedureComponent}>
        <div ref={containerRef} className={styles.proceduresHighlight}>
          {" "}
          {/* 60% width */}
          <p className={styles.headerText}>
            “You don&#39;t pay for your beauty surgery - You pay for your unique
            experience“
          </p>
          <h1 ref={titleRef} className={styles.mainTitle}>
            OUR PROCEDURES
          </h1>
          <div className={styles.highlightText}>
            <p className={`text-left ${highlightRow === 0 ? "fade-in" : ""}`}>
              BEAUTY
            </p>
            <p className={`text-right ${highlightRow === 0 ? "fade-in" : ""}`}>
              SURGERY
            </p>
            <p
              className={`text-left mt-2 ${
                highlightRow === 1 ? "fade-in" : ""
              }`}
            >
              GENDER
            </p>
            <p
              className={`text-right mt-2 ${
                highlightRow === 1 ? "fade-in" : ""
              }`}
            >
              TRANSITIONING
            </p>
            <p
              className={`text-left mt-2 ${
                highlightRow === 2 ? "fade-in" : ""
              }`}
            >
              AESTHETIC
            </p>
            <p
              className={`text-right mt-2 ${
                highlightRow === 2 ? "fade-in" : ""
              }`}
            >
              NON-SURGICAL
            </p>
            <p
              className={`text-left mt-2 ${
                highlightRow === 3 ? "fade-in" : ""
              }`}
            >
              DENTAL
            </p>
            <p
              className={`text-right mt-2 ${
                highlightRow === 3 ? "fade-in" : ""
              }`}
            >
              TREATMENTS
            </p>
          </div>
          <div className={styles.detailsButtonContainer}>
            <Link href="/procedures/type/page" passHref>
              <button className={styles.detailsButton}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
