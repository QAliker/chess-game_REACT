/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import whitePieces from "./object/WhitePieces"
import blackPieces from "./object/BlackPieces"
const previousSquare = []
const selectedPiece = []
const onPiece = null
const oneSquare = null
const nextSquare = []
let selectedSquare = null
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
    
    const selectPiece = () => {
        const pieces = blackPieceLogo || whitePieceLogo || "Vide"
        selectedSquare = key
        previousSquare.push(selectedSquare) 
        selectedPiece.push(pieces)
        console.log(previousSquare, selectedPiece)

        if(selectedSquare.length > 0 && selectedPiece.length > 0) {
            console.log(previousSquare.pop(), selectedPiece.pop())
        }
    }

    const movePiece = () => {

    }

    return(
    <td 
    className="border border-sky-400 bg-white text-4xl px-3" 
    key={key}
    onClick={selectPiece} 
    onDoubleClick={movePiece}
    >{whitePieceLogo} {blackPieceLogo}</td>
)}

export default CreatingPieces
