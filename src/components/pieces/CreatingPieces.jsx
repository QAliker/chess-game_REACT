import whitePieces from "./object/WhitePieces"
import blackPieces from "./object/BlackPieces"
const CreatingPieces = ({number, letter}) => {
    const key = `${letter}-${number}`
    let whitePieceLogo = null
    whitePieces.forEach((whitePiece) => {
        if(whitePiece.currentSquare === key) {
            whitePieceLogo = whitePiece.logo
        }
    })
    let blackPieceLogo = null
    blackPieces.forEach((blackPiece) => {
        if(blackPiece.currentSquare === key) {
            blackPieceLogo = blackPiece.logo
        }
    })

    return(
        <td 
        key={`${letter}-${number}`}
        className="border border-sky-400 bg-white text-4xl px-30"
        > 
    {whitePieceLogo} {blackPieceLogo}</td>
)}

export default CreatingPieces
