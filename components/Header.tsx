"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.css";
import { useEffect, useState } from "react";

const defaultNavLinks = [
  { name: "Home", href: "#", active: false },
  { name: "About", href: "#about", active: false },
  { name: "Experience/Education", href: "#experience", active: false },
  { name: "Projects", href: "#projects", active: false },
  {
    name: "Resume",
    href: "./Olise_Onwu_Resume_ReactNative_Developer.pdf",
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
  const [isScrolledFromTop, setIsScrolledFromTop] = useState(false);
  const [navLinks, setNavLinks] = useState(defaultNavLinks);

  useEffect(() => {
    // set which link is bolded
    setInitalActiveLink();

    // Check if the user has scrolled from the top
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolledFromTop(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (index: number) => {
    setNavLinks(navLinks.map((link, i) => ({ ...link, active: i === index })));
  };

  const setInitalActiveLink = () => {
    const hash = window.location.hash;
    const index = navLinks.findIndex((link) => link.href === hash);

    if (index !== -1) {
      setNavLinks(
        navLinks.map((link, i) => ({ ...link, active: i === index }))
      );
    }
  };
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${
          isScrolledFromTop ? styles.onScrolledFromTop : ""
        }`}
      >
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={link.active ? styles.activeLink : styles.link}
                onClick={() => handleLinkClick(index)}
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
