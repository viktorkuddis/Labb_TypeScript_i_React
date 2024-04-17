
import { useState } from 'react'
import './App.css'

import Board from './components/Board'

function App() {


  const [currentPlayer, setCurrentPlayer] = useState("X")

  return (

    <>
      <h1> TIKK TAKK TÅ</h1>
      <h2> {`${currentPlayer}s tur!`}</h2>
      <br />


      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}></Board>
      <br />

      <button style={{ backgroundColor: "lightcoral" }}>Starta Om</button>
      <br />
    </>

  )
}

export default App
