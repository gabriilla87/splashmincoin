import React from 'react';
import './App.css';
import {ClickerEntity} from "./components/ClickerEntity/ClickerEntity";
import {ScoreDisplay} from "./components/ScoreDisplay/ScoreDispaly";

function App() {
    return (
        <div className="App">
            <ScoreDisplay/>
            <ClickerEntity/>
        </div>
    );
}

export default App;
