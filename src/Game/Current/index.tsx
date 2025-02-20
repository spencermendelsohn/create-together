import {useParams} from "react-router";
import {decodeBase64} from "../encoding_decoding.ts";
import {Game} from "../types.ts";

export default function Current() {
    // Set useParams to const and set default value to empty string
    const { id = "" } = useParams();
    let decodedId: Game = {
        current_player: 0,
        current_round: 0,
        drawings: [],
        id: "",
        number_players: 0,
        players: [],
        rounds: [],
        total_rounds: 0,
        winner: null,
    };
    try {
        decodedId = JSON.parse(decodeBase64(id));
    }
    catch {
        return (
            <div>
                <h1>Invalid</h1>
            </div>
        )
    }
    const players = decodedId.players.map((player) => player.name).join(" vs ");
    return (
        <div>
            <h1>Game {players}</h1>
        </div>
    )
}