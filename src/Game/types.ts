import {Player} from "../Player/types.ts";

export type Game = {
    id: string;
    number_players: number;
    total_rounds: number;
    current_round: number;
    current_player: number;
    players: Player[];
    rounds: Round[];
    winner: Player | null;
    drawings: Drawing[];
}

export type Round = {
    id: string;
    current: number;
    total: number;
}

export type Drawing = {
    id: string;
    player: Player;
    round: Round;
    image: Coords[];
}

export type Coords = {
    x: number;
    y: number;
    color: string;
}