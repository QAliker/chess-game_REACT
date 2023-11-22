import React from "react"
import whitePieces from "./object/WhitePieces"
import blackPieces from "./object/BlackPieces"
const CreatingPieces = ({number, letter}) => {
    const whiteKey = `${letter}-${number}`
    let whitePieceLogo = null
    whitePieces.forEach((whitePiece) => {
        if(whitePiece.startingSquare === whiteKey) {
            whitePieceLogo = whitePiece.logo
        }
    })
    const blackKey = `${letter}-${number}`
    let blackPieceLogo = null
    blackPieces.forEach((blackPiece) => {
        if(blackPiece.startingSquare === blackKey) {
            blackPieceLogo = blackPiece.logo
        }
    })

    return(
    <td className="border border-sky-400 bg-white text-4xl px-3" key={whiteKey}>{whitePieceLogo} {blackPieceLogo}</td>
)}

export default CreatingPieces
