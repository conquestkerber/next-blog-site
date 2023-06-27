import classes from "../HomePage/HeroPage.module.css";
import Image from "next/image";

import React from "react";

const HeroPage = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="Stefan"
          width={300}
          height={300}
        />
      </div>
      <h1 className={classes.h1}>Hi,my name is Stefan</h1>
      <p className={classes.p1}>
        I blog aboute web development especially React
      </p>
    </section>
  );
};

export default HeroPage;
