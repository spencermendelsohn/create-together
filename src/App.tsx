import './App.css'
import {HashRouter, Navigate, Route, Routes} from "react-router";
import Game from "./Game";

function App() {
  return (
      <HashRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="/Game/New" />} />
                  <Route path="/Game/*" element={<Game />} />
              </Routes>
          </div>
      </HashRouter>
  )
}

export default App
