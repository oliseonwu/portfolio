import Currently from "./Currently";
import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <h1 className={styles.title}>
        Hi, I'm Olise <span className={styles.wave}>👋</span>
      </h1>
      <p className={styles.subtitle}>
        I am a freelance full-stack developer. I've been programming for over
        eight years and am obsessed with learning. I'm currently focused on
        building full-stack mobile solutions, particularly using react native,
        but I'm always deep-diving into various branches of Computer Science.
      </p>
      <p className={styles.currently}>This is what I am currently up to:</p>
      <Currently />
    </section>
  );
}
