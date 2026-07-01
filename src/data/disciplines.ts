import type { Discipline } from "../types/discipline";

import car from "../assets/images/car.jpg";
import robot from "../assets/images/robot.jpg";
import vehicle from "../assets/images/vehicle.jpg";
import drone from "../assets/images/drone.jpg";
import football from "../assets/images/football.jpg";
import robo from "../assets/images/robo.png";

export const firstRow: Discipline[] = [
  {
    image: car,
    imageAlt: "Robo Race",
    title: "Robo Race",
    titleClass:
      "text-white text-[35px] font-medium tracking-[4%] font-['Roboto']",
  },
  {
    image: robot,
    imageAlt: "Line Follower",
    title: "Line Follower",
    titleClass:
      "text-white text-[35px] font-medium tracking-[4%] font-['Roboto']",
  },
  {
    image: vehicle,
    imageAlt: "RC Racing",
    title: "RC Racing",
    titleClass:
      "text-white text-[35px] font-medium tracking-[4%] font-['Roboto']",
  },
  {
    image: drone,
    imageAlt: "Drone",
    title: "FPV Drone Racing &\nAeromodelling",
    titleClass:
      "text-white text-[20px] leading-[115%] tracking-[4%] font-medium font-['Roboto'] whitespace-pre-line",
  },
];

export const secondRow: Discipline[] = [
  {
    image: football,
    imageAlt: "Robo Hockey",
    title: "Robo Hockey",
    titleClass:
      "text-white text-[35px] font-medium tracking-[4%] font-['Roboto']",
  },
  {
    image: robo,
    imageAlt: "Robo War",
    title: "Robo War",
    titleClass:
      "text-white text-[35px] font-medium tracking-[4%] font-['Roboto']",
  },
];
