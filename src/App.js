import palavras from "./palavras"
import { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca5.png"
//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

palavras.sort(comparador); // embaralha a array

function comparador() {
    return Math.random() - 0.5;
}


export default function App() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [letterhidden, setLetterHidden] = useState("_")
    const [errors, setErrors] = useState(0);
    const [display, setDisplay] = useState("display-none")
    const [operateLetter, setOperateLetter] = useState("letter disabled")
    const [operateInput, setOperateInput] = useState("word disabled")
    const word = palavras[0].split('')
    const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    let newLettersDiscovered = []
    const [lettersdiscovered, setLettersDiscovered] = useState(newLettersDiscovered)
    console.log(word)

    function Letter({letters}) {
        return (
            <>
                {letters.map((l, index) => {
                    return <button key={index} value={l} onClick={chooseLetter} className={operateLetter}>{l}</button>;
                })}
            </>
        )
    }

    function startGame(){
        setDisplay("spaces")
        setOperateLetter("letter enabled")
        setOperateInput("word enabled")
    }

    function chooseLetter(e){
        let letterpicked = e.target.value
        console.log(letterpicked.toLowerCase())
            if (word.includes(letterpicked.toLowerCase())){
                newLettersDiscovered = [...lettersdiscovered, letterpicked]
                console.log("new", newLettersDiscovered)
                setLettersDiscovered(newLettersDiscovered)
            } else{
                setErrors(errors+1)
            }
        }

    return (
        <div className="content">
            <div className="upper">
                <img src={imgs[errors]} alt="" />
                <div className="side">
                    <button className="choose" onClick={startGame}>Escolher palavra!</button>
                    <div className={display}>
                        {word.map((letterinarray, index) => (
                            <p className="space"
                                key={index} >{lettersdiscovered.includes(letterinarray.toUpperCase()) ? letterinarray : "_"}</p>
                        ))}                    
                        </div>
                </div>
            </div>
            <div className="letters">
                <Letter letters={letters} />
            </div>
            <div className="answer">
                <p className="know">Já sei a palavra!</p>
                <input className={operateInput}></input>
                <button className="try">Chutar</button>
            </div>
        </div>

    )
}