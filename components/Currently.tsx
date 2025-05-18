"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/Currently.module.css";
import Link from "next/link";

const activities = [
  {
    content: "Playing Apex Legends",
    icon: "./gamepad.svg",
    link: "https://www.ea.com/games/apex-legends/apex-legends",
  },
  {
    content: "Launched ChoirSync",
    icon: "./rocket.svg",
    link: "https://choirsync.info",
  },
  {
    content: "Reading 9 out of 10 climbers makes the same mistakes",
    icon: "./book-open.svg",
    link: "https://youtu.be/NUfcupaDxng?si=5WkqJ_BGO-zkfchB",
  },
];

export default function Currently() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setVisible(true);
      }, 400); // match fade duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = activities[currentIndex];

  return (
    <Link className={styles.link} href={current.link} target="_blank">
      <div
        className={
          styles.currently + " " + (visible ? styles.fadeIn : styles.fadeOut)
        }
      >
        <span className={`${styles.icon} ${styles.breathe}`}>
          <Image src={current.icon} alt="" width={18} height={18} />
        </span>
        <span className={styles.text}>{current.content}</span>
      </div>
    </Link>
  );
}
