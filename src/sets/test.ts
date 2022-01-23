import { Card } from "../engine/card.js";
import { Cost } from "../engine/cost.js";

export const testSet: Card[] = [
  new Card(
    "test-001",
    "Draw 1",
    new Cost(1, 0, 0, 0, null),
    null,
    "test card",
    (gameEngine) => gameEngine.draw(1)
  ),
];
