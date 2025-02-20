import {Route, Routes} from "react-router";
import New from "../New";
import InvalidGame from "./Error/invalidGame.tsx";
import Current from "./Current";

export default function Game() {

    return (
        <div id="wd-labs">
            <h1>Welcome to Create Together</h1>
            <Routes>
                <Route path="invalidGame" element={<InvalidGame/>}/>
                <Route path="New" element={<New/>}/>
                <Route path=":id" element={<Current/>}/>
            </Routes>
        </div>
    );
}
