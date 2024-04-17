
import { useState } from 'react'
import './App.css'

import Board from './components/Board'

function App() {


  const [currentPlayer, setCurrentPlayer] = useState("X")

  //array med alla celler initieras som toma strings som markerar att dom är lediga.
  const initialCells = ["", "", "", "", "", "", "", "", ""]
  const [cells, setCells] = useState(initialCells);

  return (

    <>
      <h1> TIKK🕚TAKK🕓TÅ🦶</h1>
      <h2> {`${currentPlayer}s tur!`}</h2>
      <br />


      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        cells={cells}
        setCells={setCells}></Board>
      <br />

      <br />
      <button style={{ backgroundColor: "lightcoral" }}
        onClick={() => setCells(initialCells)}>Starta Om</button>
      <br />
    </>

  )
}

export default App
