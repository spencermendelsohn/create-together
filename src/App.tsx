import './App.css'
import {HashRouter, Navigate, Route, Routes} from "react-router";
import Game from "./Game";
import New from "./New";
// import New from "./Game/New";

function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="/New" />} />
                  <Route path="/Game/*" element={<Game />} />
                  <Route path="/Error" element={<h1>Error</h1>} />
                  <Route path={"/New"} element={<New/>}/>
              </Routes>
          </div>
      </HashRouter>
  )
}

export default App
