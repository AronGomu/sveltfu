import type { Cost } from "./cost";

export class Card {
    id: string; // string
    name: string; // string
    cost: Cost; // Cost
    img: string; // img relative path
    text: string; // text effect
    effect: Function; // effect of the card when resolving

    constructor(id: string, name: string, cost: Cost, img: string, text: string, effect: Function) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.img = img;
        this.text = text;
        this.effect = effect;
    }
}