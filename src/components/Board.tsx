
import { useState } from "react";
import Square from "./Square"

interface BoardProps {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;

}


export default function Board({ currentPlayer, setCurrentPlayer }: BoardProps) {


    const [cells, setCells] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

    return (

        <>
            <Square
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} /> <br />
            <Square
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} /> <br />
            <Square
                currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} />
            <Square
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} /> <br />
        </>
    )

}
