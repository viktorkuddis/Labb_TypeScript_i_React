import { useState } from "react";



interface SquareProps {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>

}






export default function Square({ currentPlayer, setCurrentPlayer }: SquareProps) {


    const [claimedBy, setClaimedBy] = useState("")


    function handleSquareClick() {


        // om rutan inte redan är claimed så går dett att claima...
        if (claimedBy === "") {
            //sätter värdet som kommer skrivas ut i rutan:
            setClaimedBy(currentPlayer);

            //ändrar vems tur det är:
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X")

        } else {
            alert(" HÖRRUU! Den ruran var redan tagen!")
        }

    }

    return (
        <>
            <div className="square" onClick={handleSquareClick} >
                <p>{claimedBy}</p>

            </div >
        </>
    )
}