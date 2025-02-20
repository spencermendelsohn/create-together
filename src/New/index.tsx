import {useEffect, useState} from "react";
import {Player} from "../Player/types.ts";
import {newPlayer} from "../Player/newPlayer.ts";
import {Game, Round} from "../Game/types.ts";
import {newRound} from "../Game/Round/newRound.ts";
import {newGame} from "./newGame.ts";
import {useNavigate} from "react-router";
import {encodeBase64} from "../Game/encoding_decoding.ts";


export default function New() {
    const [playerOne, setPlayerOne] = useState<Player>({id: "", name: "", score: 0, is_playing: false});
    const [playerTwo, setPlayerTwo] = useState<Player>({id: "", name: "", score: 0, is_playing: false});
    const [round, setRound] = useState<Round>({id: "", current: 0, total: 0});

    const [formData, setFormData] = useState<Game>();
    const navigate = useNavigate();
    useEffect(() => {
        setFormData(newGame(2, round.total, [playerOne, playerTwo]));
    }, [playerOne, playerTwo, round]);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log(formData);
        navigate(`/Game/${encodeBase64(JSON.stringify(formData))}`);
    }

    return (
        <div>
            <h1>Welcome to Create Together</h1>
            <h2>New Game</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"playerOneName"}>Player One Name: </label>
                <input type={"text"} name={"playerOneName"} id={"playerOneName"} onChange={((e) => {
                    setPlayerOne(newPlayer(e.target.value));
                })}/>
                <br/>
                <label htmlFor={"playerTwoName"}>Player Two Name: </label>
                <input type={"text"} name={"playerTwoName"} id={"playerTwoName"} onChange={((e) => {
                    setPlayerTwo(newPlayer(e.target.value));
                })}/>
                <br/>
                <label htmlFor={"total_rounds"}>Total Rounds</label>
                <input type="number" name="total_rounds" id={"total_rounds"} onChange={((e) => {
                    setRound(newRound(Number(e.target.value)));
                })}/>
                <br/>
                <button type="submit">Start Game</button>
            </form>
        </div>
    )
}