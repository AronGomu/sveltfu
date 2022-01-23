import type { Ressources } from "./ressources";

export class Cost {
  unc: number; // uncolor cost
  red: number;
  blue: number;
  green: number;
  other: Function;

  constructor(
    unc: number,
    red: number,
    blue: number,
    green: number,
    other: Function
  ) {
    this.unc = unc;
    this.red = red;
    this.blue = blue;
    this.green = green;
    this.other = other;
  }
}
