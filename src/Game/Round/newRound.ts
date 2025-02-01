// Create a new round give a total number of rounds using the Round type

// @param total - the total number of rounds
// @returns a new round

import { v5 as uuidv5 } from 'uuid';
import {Round} from "../types.ts";

export function newRound(total: number): Round {
    return {
        id: uuidv5(total.toString(), uuidv5.URL),
        current: 0,
        total: total,
    };
}