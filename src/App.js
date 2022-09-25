import palavras from "./palavras"
import { useState } from "react"
import forca0 from "./assets/forca0.png"
/* import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca5.png" */


palavras.sort(comparador); // embaralha a array

function comparador() {
    return Math.random() - 0.5;
}

function Letter({ letters }) {
    return (
        <>
            {letters.map((l, index) => {
                return <button key={index} className="letter disabled">{l}</button>;
            })}
        </>
    )
}


export default function App() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [errors, setErrors] = useState(0);
    const word = palavras[0].split('')
    console.log(word)

    return (
        <div className="content">
            <div className="upper">
                <img src={forca0} alt="" />
                <div className="side">
                    <button className="choose">Escolher palavra!</button>
                    <div className="spaces">
                        {word.map((letterInArray, index) => (
                            <p className="space"
                                key={index} letterInArray= {letterInArray}>_ </p>
                        ))}                    
                        </div>
                </div>
            </div>
            <div className="letters">
                <Letter letters={letters} />
            </div>
            <div className="answer">
                <p className="know">Já sei a palavra!</p>
                <input className="word disabled"></input>
                <button className="try">Chutar</button>
            </div>
        </div>

    )
}