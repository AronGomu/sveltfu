import type { Cost } from "./Cost";

export class Card {
  id: string;
  name: string;
  type: string;
  cost: Cost;
  power: number;
  damage: number;
  img: string; // img relative path
  text: string; // text effect
  effect: Function; // effect of the card when resolving

  constructor(
    id: string,
    name: string,
    type: string,
    cost: Cost,
    power: number,
    damage: number,
    img: string,
    text: string,
    effect: Function
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.power = power;
    this.damage = damage;
    this.img = img;
    this.text = text;
    this.effect = effect;
  }
}
