import { Database } from "../sets/database";
import type { Card } from "./card";
import { Cost } from "./cost";
import { Ressources } from "./ressources";

export class Game {
  ressources: Ressources;
  deck: Card[];
  hand: Card[];
  database: Database;
  stack: Card;

  constructor(
    ressources = new Ressources(0, 0, 0, 0),
    deck = [],
    hand = [],
    database = new Database()
  ) {
    this.ressources = ressources;
    this.deck = deck;
    this.hand = hand;
    this.database = database;
  }

  // Generate X numnber of a card to the deck
  // id : card id
  // nb : number of card to add
  addToDeck(id: string, nb: number): void {
    for (let i = 0; i < nb; i++) {
      this.deck.push(this.database.getCard(id));
    }
  }

  // Put X number of the last card from the deck in the hand
  draw(nb) {
    for (let i = 0; i < nb; i++) {
      this.hand.push(this.deck.pop());
    }
  }

  // Put the card on the stack and resolve the card effect
  // i : index of the card in list
  playCardFromHand(i) {
    this.stack = this.hand[i];
    this.hand.splice(i, 1);
    this.stack.effect;
  }
}
