// Create a new game given number_players and total_rounds using the Game type
//
// @param number_players - the number of players
// @param total_rounds - the total number of rounds
// @returns a new game
//

import { v5 as uuidv5 } from 'uuid';
import {Game} from "../types.ts";
import {Player} from "../../Player/types.ts";

export function newGame(number_players: number, total_rounds: number, players: Player[]): Game {
    return {
        id: uuidv5(total_rounds.toString(), uuidv5.URL),
        number_players: number_players,
        total_rounds: total_rounds,
        current_round: 0,
        current_player: 0,
        players: players,
        rounds: [],
        winner: null,
        drawings: [],
    };
}