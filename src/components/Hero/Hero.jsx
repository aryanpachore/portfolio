import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aryan</h1>
        <p className={styles.description}>
        Hello there! I am Aryan Pachore, a passionate and dedicated 3rd-year Computer Science student at VIT Bhopal University.
         Currently pursuing my Bachelor's degree in computer science,
          I am deeply immersed in the exciting world of computer science.


        </p>
        <a href="mailto:aryan.dev2304@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
