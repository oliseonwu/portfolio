"use client";
import styles from "./styles/ExperienceEducation.module.css";
import ExperienceMenuDesktop from "./ExperienceMenuDesktop";
import ExperienceDetail from "./ExperienceDetail";
import experienceData from "../constants/experienceData";
import ExperienceMenuMobile from "@/components/ExperienceMenuMobile";
import React, { useState } from "react";

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const exp = experienceData[selected];
  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.contents}>
        <ExperienceMenuDesktop
          names={experienceData.map((e) => e.company)}
          selected={selected}
          onSelect={setSelected}
        />
        <ExperienceMenuMobile
          names={experienceData.map((e) => e.company)}
          selected={selected}
          onSelect={setSelected}
        />

        <div className={styles.space}></div>
        <ExperienceDetail
          heading={exp.heading}
          date={exp.date}
          bulletPoints={exp.bulletPoints}
        />
      </div>
    </section>
  );
}
