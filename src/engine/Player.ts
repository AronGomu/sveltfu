import { Card } from "./Card";
import { Ressources } from "./ressources";
import type { Database } from "../sets/Database";

export class Player {
    name: string;
    life: number;
    ressources: Ressources;
    deck: Card[];
    hand: Card[];
    stack: Card[];

  /**
   * Constructor of a gane object
   * @param ressources A Ressource object
   * @param deck An array of Card object
   * @param hand An array of Card object
   * @param stack An array of Card object
   */
  constructor(
    ressources: Ressources = new Ressources(0, 0, 0, 0),
    deck: Card[] = [],
    hand: Card[] = [],
    stack: Card[] = []
  ) {
    this.ressources = ressources;
    this.deck = deck;
    this.hand = hand;
    this.stack = stack;
  }


  /**
   * Generate X number of a card to the deck
   * @param id card id
   * @param nb number of card to add
   * @returns an array of Card object
   */
   addToDeck(database: Database, id: string, nb: number): boolean {
    let card = database.getCard(id);
    if (card == null) return false;
    for (let i = 0; i < nb; i++) {
      this.deck.push(card);
    }
    return true;
  }

  /**
   * Put X number of the last card from the deck in the hand
   * @param nb The number of card to draw
   * @returns An array of the card drawned. If there are no card to draw, return an empty array
   */
  draw(nb: number): Card[] {

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

  /**
   * Put the card on the stack and resolve the card effect
   * @param i Index of the card from the hand array
   * @returns The selected card as a Card object
   */
  playCardFromHand(i: number): Card {
    if (i + 1 > this.hand.length) return null;

    let cardToPlay = this.hand[i];
    this.stack.push(cardToPlay);
    this.hand.splice(i, 1);
    return cardToPlay;
  }
}
