import { createContext } from "react";
import { CountySvgData } from "./CountySvgData";

const colors = [
  "#d0d0d0",
  "Blue",
  "Red",
  "url(#Green-Checker)",
  "url(#Blue-Checker)",
  "url(#Red-Checker)",
  "Orange",
  "Yellow",
  "Purple",
  "Green",
  "url(#Orange-Checker)",
  "url(#Yellow-Checker)",
  "url(#Purple-Checker)",
];

const countyAssignmentList = CountySvgData.reduce(
  (acc, county) => ({ ...acc, [county.County]: 0 }),
  {}
);

const salespersonList = colors.reduce(
  (acc, color, currentIndex) => ({
    ...acc,
    [currentIndex]: color,
  }),
  {}
);

export const populationData = CountySvgData.reduce(
  (acc, county) => ({
    ...acc,
    [county.County]: Math.ceil(county.population / 20000),
  }),
  {}
);
const shopCountList = colors.reduce(
  (acc, color, currentIndex) => ({
    ...acc,
    [currentIndex]: 0,
  }),
  {}
);

export const AppContextObject = {
  selectedSalesperson: 0,
  countyAssignment: countyAssignmentList,
  salespeople: salespersonList,
  shopCount: shopCountList,
};

export const AppContextNew = createContext();