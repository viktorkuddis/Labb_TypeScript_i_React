
import { useState } from "react";
import Square from "./Square"

interface BoardProps {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;

}

export default function Board({ currentPlayer, setCurrentPlayer }: BoardProps) {

    //array med alla celler initieras som toma strings som markerar att dom är lediga.
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

    return (

        <>
            {/* rendera ut varje cell: */}

            {cells.map((__, index) => {
                return (
                    <span key={index}>
                        <Square
                            currentPlayer={currentPlayer}
                            setCurrentPlayer={setCurrentPlayer}
                            currentCellIndex={index}
                            cells={cells}
                            setCells={setCells}
                        />

                        {/* Radbrytning omd et är dags för det..... */}
                        {index === 2 || index === 5 ? <br /> : null}

                    </span>
                )


            })}
        </>
    )

}
