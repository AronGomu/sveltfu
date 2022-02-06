import { Card } from "../engine/card";
import { Cost } from "../engine/cost";

export const testSet: Card[] = [
  new Card(
    "test-001",
    "Draw 1",
    new Cost(1, 0, 0, 0, null),
    null,
    "test card",
    (gameEngine) => gameEngine.draw(1)
  ),

  new Card(
    "test-002",
    "Draw 1",
    new Cost(1, 0, 0, 0, null),
    null,
    "test card",
    (gameEngine) => gameEngine.draw(1)
  ),
];
