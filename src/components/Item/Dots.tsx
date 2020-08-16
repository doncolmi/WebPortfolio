import React, { FC, useEffect, useState } from "react";
import "./Dots.css";

import Dot from "./Dot";

import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  currentSection: number;
}

const Top: FC<Props> = ({ currentSection }: Props) => {
  AOS.init();
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);

  const activeDot = (currentSection: number) => {
    if (currentSection === 0) setOne(true);
    else setOne(false);
    if (currentSection === 1) setTwo(true);
    else setTwo(false);
    if (currentSection === 2) setThree(true);
    else setThree(false);
    if (currentSection === 3) setFour(true);
    else setFour(false);
    if (currentSection === 4) setFive(true);
    else setFive(false);
    if (currentSection === 5) setSix(true);
    else setSix(false);
  };

  useEffect(() => {
    activeDot(currentSection);
  });

  return (
    <div
      className="dots flexCenter"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Dot active={one} />
      <Dot active={two} />
      <Dot active={three} />
      <Dot active={four} />
      <Dot active={five} />
      <Dot active={six} />
    </div>
  );
};

export default Top;
