"use client";
import React from "react";
import styles from "./styles/ExperienceMenuDesktop.module.css";

interface ExperienceMenuProps {
  names: string[];
  selected: number;
  onSelect: (idx: number) => void;
}

const ITEM_HEIGHT = 48; // px, adjust to match your .menuItem height (3rem ≈ 48px)

const ExperienceMenu: React.FC<ExperienceMenuProps> = ({
  names,
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.menuContainer} style={{ position: "relative" }}>
      {/* Single vertical bar */}
      <span
        className={styles.verticalBar}
        style={{
          position: "absolute",
          left: "100%",
          top: selected * ITEM_HEIGHT,
        }}
      />
      <ul className={styles.menuList}>
        {names.map((name, idx) => (
          <li
            key={idx}
            className={styles.menuItem}
            onClick={() => onSelect(idx)}
          >
            <div
              className={`${styles.menuName} ${
                selected === idx && styles.blueMenuItem
              } `}
            >
              {name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceMenu;
