//Import

////Models(variables)
const squareNumber = 64
const horizontalSquares = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalSquares = ["1", "2", "3", "4", "5", "6", "7", "8"]
// For of de l'objet puis foreach de starting square avec condition puis si match on display 
const whitePieces = {
    pawn:{
        logo: "&#9817;",
        startingSquare: ["A-7","B-7","C-7","D-7","E-7","F-7","G-7","H-7"]
    },
    rook:{
        logo:"&#9814",
        startingSquare: ["A-8","H-8"]
    },
    knight:{
        logo:"&#9816",
        startingSquare: ["A-8","H-8"]
    },
    bishop:{
        logo:"&#9815",
        startingSquare: ["A-8","H-8"]
    },
    queen:{
        logo:"&#9813",
        startingSquare: ["A-8"]
    },
    king:{
        logo:"&#9812",
        startingSquare: ["A-8"]
    }
}
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