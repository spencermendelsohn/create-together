// Create a new player given a name using the Player type
//
// @param name - the name of the player
// @returns a new player
import {Player} from "./types.ts";
import { v5 as uuidv5 } from 'uuid';

export function newPlayer(name: string): Player {
    const now = new Date();
    const string_concat = name + now;
    return {
        id: uuidv5(string_concat, uuidv5.URL),
        name: name,
        score: 0,
        is_playing: false,
    };
}