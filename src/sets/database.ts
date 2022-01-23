import type { Card } from "../engine/card";
import { testSet } from "./test";

export class Database {
  cards: Card[]; // Card list

  // On construction, will add all created cards to the database
  constructor() {
    this.cards = [];
    testSet.forEach(card => {
      this.cards.push(card);
    });
  }

  getCard(id): Card {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].id === id) return this.cards[i];
    }
  }
}
