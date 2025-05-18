import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.css";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#about", active: false },
  { name: "Experience/Education", href: "#experience", active: false },
  { name: "Projects", href: "#projects", active: false },
  {
    name: "Resume",
    href: "/Olise_Onwu_Resume_ReactNative_Developer.pdf",
    active: false,
  },
];

const icons = [
  {
    src: "./github-icon.svg",
    alt: "GitHub",
    href: "https://github.com/oliseonwu",
  },
  {
    src: "./linkdin-icon.svg",
    alt: "LinkedIn",
    href: "https://linkedin.com/in/oliseonwu/",
  },
  {
    src: "./envelop-icon.svg",
    alt: "Email",
    href: "mailto:oliseonwu@gmail.com",
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={link.active ? styles.activeLink : styles.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.icons}>
          {icons.map((icon) => (
            <Link
              href={icon.href}
              key={icon.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                className={styles.icon}
              />
            </Link>
          ))}
        </div>
      </nav>
      <nav className={`${styles.navMobile}`}>
        <div className={`${styles.icons} `}>
          {icons.map((icon) => (
            <Link
              href={icon.href}
              key={icon.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className={styles.icon}
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
