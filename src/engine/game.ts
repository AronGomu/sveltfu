import { Database } from "../sets/Database";
import { Player } from "./Player";
import type { Card } from "./Card";
import { Opponent } from "./Opponent";
import { Ressources } from "./ressources";

/**
 * Contains all the elements describing the game state and functions associated with it
 */
export class Game {
  /** State of the game, what action is occuring */
  state: string;
  database: Database = new Database();
  player: Player;
  opponents: Opponent[];


  /**
   * Constructor of a gane object
   * @param database A Database object
   * @param stack An array of Card object 
   * @param player Player object containing all ressources
   * @param opponents[] An array of Opponent object containing the their behavior
   */
  constructor(
    state: string = "Game Start",
    player: Player = new Player(),
    opponents: Opponent[] = []
  ) {
    this.state = state;
    this.player = player;
    this.opponents = opponents;
  }

  /** Return the player or an opponent correspind to the name given 
   * @param name name of the player or opponent
   * @returns a Player object
  */
  getPlayerByName(name) : Player {
    if (this.player.name == name) return this.player;

    for (let i = 0; i < this.opponents.length; i++) {
      if (this.opponents[i].name == name) return this.opponents[i]
    }

    throw new Error("No player found for this name.");
    
  }
}
