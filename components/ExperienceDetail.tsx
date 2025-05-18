import React from "react";
import styles from "./styles/ExperienceDetail.module.css";

interface ExperienceDetailProps {
  heading: string;
  date: string;
  bulletPoints: string[];
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
  heading,
  date,
  bulletPoints,
}) => (
  <div className={styles.detailContainer}>
    <h3 className={styles.heading}>{heading}</h3>
    <div className={styles.date}>{date}</div>
    <ul className={styles.bulletList}>
      {bulletPoints.map((point, idx) => (
        <li key={idx} className={styles.bulletItem}>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceDetail;
