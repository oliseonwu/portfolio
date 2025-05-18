// components/Projects.tsx
"use client";
import React, { useMemo } from "react";
import styles from "./styles/Projects.module.css";
import { ProjectType } from "@/constants/projectsData";
import Image from "next/image";
import Link from "next/link";

const LINK_SIZE = 20;
const Project: React.FC<ProjectType> = ({
  title,
  imagePath,
  description,
  techStack,
  appleLink,
  googleLink,
  websiteLink,
  gitHubLink,
}) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <img src={imagePath} alt={title} className={styles.image} />
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.contentHeading}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.linkContainer}>
            {appleLink ? (
              <Link href={appleLink}>
                <Image
                  src={"./apple.svg"}
                  width={LINK_SIZE}
                  height={LINK_SIZE}
                  className={styles.link}
                  alt=""
                ></Image>
              </Link>
            ) : null}
            {googleLink ? (
              <Link href={googleLink}>
                <Image
                  src={"./google.svg"}
                  width={LINK_SIZE}
                  height={LINK_SIZE}
                  className={styles.link}
                  alt=""
                ></Image>
              </Link>
            ) : null}

            {gitHubLink ? (
              <Link href={gitHubLink}>
                <Image
                  src={"./github-blue.svg"}
                  width={LINK_SIZE}
                  height={LINK_SIZE}
                  className={styles.link}
                  alt=""
                ></Image>
              </Link>
            ) : null}
            {websiteLink ? (
              <Link href={websiteLink} className={styles.link}>
                <Image
                  src={"./web.svg"}
                  width={LINK_SIZE}
                  height={LINK_SIZE}
                  className={styles.linkImage}
                  alt=""
                ></Image>
              </Link>
            ) : null}
          </div>
        </div>

        <span>{description}</span>
        <div className={styles.techStack}>
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </div>
      </div>
      {/* <ul className={styles.bulletList}>
        {description.map((point, idx) => (
          <li key={idx} className={styles.bulletItem}>
            {point}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Project;
