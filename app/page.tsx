import Image from "next/image";
import colors from "@/constants/colors.module.css";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import styles from "@/components/styles/Home.module.css";
import ProjectsList from "@/components/ProjectsList";

export default function Home() {
  return (
    <div id="home" className={` ${styles.container}`}>
      <Hero />
      <Experience />
      <ProjectsList />
    </div>
  );
}
