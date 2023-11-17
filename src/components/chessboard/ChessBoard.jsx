//Import

////Models(variables)
const squareNumber = 64
const horizontalSquares = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalSquares = ["1", "2", "3", "4", "5", "6", "7", "8"]
//Controller(function)
//View
const ChessBoard = () => (
    <div className="chessboard">
    <h1>Nombre de case à créer : {squareNumber}</h1>
    <div className="flex justify-center">
    <table className="mt-5">
        <tbody>
            <td className="border border-sky-400 bg-slate-400 text-4xl px-3"></td>
            {horizontalSquares.map((letter) => (
            <td
                key={letter}
                className="border border-sky-400 bg-slate-400 text-4xl px-3">
                {letter}
            </td>
            ))}
            {verticalSquares.map((number) => (
            <tr key={number}>
            <td className="border border-sky-400 bg-slate-400 text-4xl px-3">
                {number}
            </td>
            {horizontalSquares.map((letter) => (
                <td
                key={`${number}-${letter}`}
                className="border border-sky-400 bg-white text-4xl px-3">&#9817;</td>
                ))}
            </tr>
            ))}
        </tbody>
    </table>
    </div>
</div>
)

export default ChessBoard