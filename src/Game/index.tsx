import {Navigate, Route, Routes} from "react-router";
import New from "./New";

export default function Game() {
    return (
        <div id="wd-labs">
            <h1>Welcome to Create Together</h1>
            <Routes>
                <Route path="/" element={<Navigate to="New"/>}/>
                <Route path="New" element={<New/>}/>
            </Routes>
        </div>
    );
}
