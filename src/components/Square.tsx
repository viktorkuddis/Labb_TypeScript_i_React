
interface SquareProps {
    currentPlayer: string;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
    cells: string[]
    setCells: React.Dispatch<React.SetStateAction<string[]>>;
    currentCellIndex: number;

}


export default function Square({
    currentPlayer,
    setCurrentPlayer,
    cells,
    setCells,
    currentCellIndex }: SquareProps) {

    function handleSquareClick() {

        // om cellen är fri så går det att ta den...
        if (cells[currentCellIndex] === "") {

            //sätter nya arrayen av celler:
            setCells(cells.map((cell, index) => {
                if (currentCellIndex == index) {
                    return currentPlayer
                } else {
                    return cell
                }
            }))
            //Ändrar vems tur det är
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X")

        } else {
            //om cellen var upptagen:
            alert(" HÖRRUU! Den uran var redan tagen!")
        }
    }

    return (

        <div className="square" onClick={handleSquareClick} >
            <p>{cells[currentCellIndex]}</p>
        </div >

    )
}