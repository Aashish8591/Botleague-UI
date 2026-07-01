import type { Sponsor } from "../types/sponsor";

import nit from "../assets/images/nit.png";
import bit from "../assets/images/bit.png";
import sil from "../assets/images/sil.png";
import com from "../assets/images/com.png";
import iit from "../assets/images/iit.png";
import gen from "../assets/images/gen.png";

export const sponsorRowOne: Sponsor[] = [
  {
    image: nit,
    alt: "NIT Delhi",
    title: "NIT DELHI",
    wrapperClass: "flex items-center justify-center gap-[28px]",
    imageClass: "w-[140px] h-[140px] object-contain opacity-60",
    titleClass:
      "font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] text-white opacity-60",
  },

  {
    image: bit,
    alt: "Indian BIT",
    title: "INDIAN BIT",
    wrapperClass: "flex items-center gap-[18px]",
    imageClass: "w-[240px] h-[187px] object-contain opacity-60",
    titleClass:
      "font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] text-white opacity-60",
  },

  {
    image: sil,
    alt: "NIT Silchar",
    title: "NIT SILCHAR",
    wrapperClass: "flex items-center gap-[22px]",
    imageClass: "w-[161px] h-[161px] object-contain opacity-60",
    titleClass:
      "font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] text-white opacity-60",
  },
];

export const sponsorRowTwo: Sponsor[] = [
  {
    image: com,
    alt: "Robo Company",
    title: "ROBO\nCOMPANY",
    wrapperClass: "flex items-center gap-[2px]",
    imageClass: "w-[283px] h-[158px] object-contain opacity-60",
    titleClass:
      "w-[169px] whitespace-pre-line font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] leading-[35px] text-white opacity-60",
  },

  {
    image: iit,
    alt: "IIT Bombay",
    title: "IIT\nBOMBAY",
    wrapperClass: "flex items-center gap-[30px] ml-[60px]",
    imageClass:
      "w-[139px] h-[136px] object-contain opacity-60 select-none pointer-events-none",
    titleClass:
      "whitespace-pre-line font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] leading-[100%] text-white opacity-60",
  },

  {
    image: gen,
    alt: "General Robotics",
    title: "ROBO\nCOMPANY",
    wrapperClass: "flex items-center gap-[2px]",
    imageClass: "w-[300px] h-[168px] object-contain opacity-60",
    titleClass:
      "w-[169px] whitespace-pre-line font-['Roboto'] text-[30px] font-semibold tracking-[0.02em] leading-[35px] text-white opacity-60",
  },
];