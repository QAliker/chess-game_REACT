import CreatingPieces from "../pieces/CreatingPieces"
const horizontalSquares = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalSquares = ["1", "2", "3", "4", "5", "6", "7", "8"]
const ChessBoard = () => (
    <div className="flex justify-center">
    <table className="mt-5 cursor-pointer" id="chessboard">
        <thead>
            <tr>
            <th className="border border-sky-400 bg-slate-400 text-4xl px-3"></th>
            {horizontalSquares.map((letter) => (
                <th
                key={letter}
                className="border border-sky-400 bg-slate-400 text-4xl px-3">
                {letter}
            </th>
            ))}
            </tr>
            </thead>
            <tbody>
            {verticalSquares.map((number) => (
                <tr key={number}>
            <td className="border border-sky-400 bg-slate-400 text-4xl px-3">
                {number}
            </td>
            {horizontalSquares.map((letter) => (
                <CreatingPieces 
                number={number} 
                letter={letter} 
                key={`${letter}-${number}`}/>
                
            ))}
            </tr>
            ))}
        </tbody>
    </table>
    </div>

)

export default ChessBoard