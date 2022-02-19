import { Card } from "../engine/Card";
import { Cost } from "../engine/Cost";

export const testSet: Card[] = [
  new Card(
    "test-001",
    "ETB Drawing Summoner",
    "Summoner",
    new Cost(1, 0, 0, 0, null),
    1000,
    2,
    null,
    "test card",
    (gameEngine) => {if (gameEngine.state == "Summoner Enter The Battlefield <player></player> <summoner>test-001</summoner>") gameEngine.draw(1)}
  ),

  new Card(
    "test-002",
    "ETG Drawing Summoner",
    "Summoner",
    new Cost(1, 0, 0, 0, null),
    1000,
    2,
    null,
    "test card",
    (gameEngine) => {if (gameEngine.state == "Summoner Enter The Graveyard <player></player> <summoner>test-002</summoner>") gameEngine.draw(1)}
  ),
];
