// components/MobileExperienceMenu.tsx
"use client";
import React from "react";
import styles from "./styles/ExperienceMenuMobile.module.css";

interface MobileExperienceMenuProps {
  names: string[];
  selected: number;
  onSelect: (idx: number) => void;
}

const MobileExperienceMenu: React.FC<MobileExperienceMenuProps> = ({
  names,
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.container}>
      {names.map((name, idx) => (
        <div
          key={idx}
          className={`${styles.index} ${
            selected === idx ? styles.selected : ""
          }`}
          onClick={() => onSelect(idx)}
        >
          {String(idx).padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default MobileExperienceMenu;
