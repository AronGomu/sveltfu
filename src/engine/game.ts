import { Database } from "../sets/Database";
import type { Card } from "./card";
import { Cost } from "./cost";
import { Ressources } from "./ressources";

export class Game {
  ressources: Ressources;
  deck: Card[];
  hand: Card[];
  database: Database;
  stack: Card[];

  constructor(
    ressources = new Ressources(0, 0, 0, 0),
    deck = [],
    hand = [],
    database = new Database(),
    stack = [],
  ) {
    this.ressources = ressources;
    this.deck = deck;
    this.hand = hand;
    this.database = database;
    this.stack = stack;
  }

  // Generate X numnber of a card to the deck
  // id : card id
  // nb : number of card to add
  addToDeck(id: string, nb: number): boolean {
    let card = this.database.getCard(id);
    if (card == null) return false;
    for (let i = 0; i < nb; i++) {
      this.deck.push(card);
    }
    return true;
  }

  // Put X number of the last card from the deck in the hand
  // Return an empty array if there are not enough cards in the deck
  draw(nb): Card[] {

    if (this.deck.length < nb) return [];

    let cardsDrawn: Card[] = []

    for (let i = 0; i < nb; i++) {
      let cardDrew: Card = this.deck.pop();
      if (cardDrew) {
        this.hand.push(cardDrew);
        cardsDrawn.push(cardDrew);
      }
    }

    return cardsDrawn;
  }

  // Put the card on the stack and resolve the card effect
  // i : index of the card in list
  playCardFromHand(i): Card {
    if (i + 1 > this.hand.length) return null;

    let cardToPlay = this.hand[i];
    this.stack.push(cardToPlay);
    this.hand.splice(i, 1);
    return cardToPlay;
  }
}
