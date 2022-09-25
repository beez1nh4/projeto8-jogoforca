import palavras from "./palavras"
import { useState } from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


palavras.sort(comparador); // embaralha a array

function comparador() {
    return Math.random() - 0.5;
}


export default function App() {

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [errors, setErrors] = useState(0);
    const [display, setDisplay] = useState("display-none")
    const [lettersclicked, setLettersClicked] = useState(letters)
    const [operateInput, setOperateInput] = useState("word disabled")
    const word = palavras[0].split('')
    const imgs = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    let newLettersDiscovered = []
    const [lettersdiscovered, setLettersDiscovered] = useState(newLettersDiscovered)
    const [text, setText] = useState("")
    //console.log(word)
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const treatedWord = treatArray(palavras[0].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').split(''))
    function Letter({ letters }) {
        return (
            <>
                {letters.map((l, index) => {
                    return <button key={index} value={l} onClick={chooseLetter} className={lettersclicked.includes(l) ? "letter disabled" : "letter enabled"}>{l}</button>;
                })}
            </>
        )
    }

    function startGame() {
        setErrors(0)
        setDisplay("spaces")
        setOperateInput("word enabled")
        setLettersClicked([]);
        setLettersDiscovered([])
        setText("")
        setWin(false)
        setLose(false)
        setDisabled(false)
        palavras.sort(comparador)
    }
    
    function treatArray(array) {
        return array.filter((i,
            index) => array.indexOf(i) === index);
    }

    function chooseLetter(e) {
        let letterpicked = e.target.value
        if(!lettersclicked.includes(letterpicked)){
        setLettersClicked([...lettersclicked, letterpicked])
        if (word.includes(letterpicked.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase())) {
            newLettersDiscovered = [...lettersdiscovered, letterpicked.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')]
            setLettersDiscovered(newLettersDiscovered)
            if(newLettersDiscovered.length === treatedWord.length){
                setWin(true)
                setDisabled(true)
                setOperateInput("word disabled")
                setLettersClicked(letters)
            }
        }
        else {
            setErrors(errors + 1)
            if (errors+1 === 6){
                setLose(true)
                setDisabled(true)
                setOperateInput("word disabled")
                setLettersClicked(letters)
            }
        }}
    }
        
    function guessWord(){
        setDisabled(true)
        if ((!win && operateInput!=="word disabled" )|| !lose && operateInput!=="word disabled")
        {setWin(text.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase() === palavras[0].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase())
        setLose(text.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase() !== palavras[0].normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase())
        setOperateInput("word disabled")
        setLettersClicked(letters);}
    }
    
    return (
        <div className="content">
            <div className="upper">
                <img src={lose ?imgs[6] :imgs[errors]} alt="" />
                <div className="side">
                    <button className="choose" onClick={startGame}>Escolher palavra!</button>
                    <div className={display}>
                        {word.map((letterinarray, index) => (
                            <p className= {"space "+ (win ? "win" : "") + (lose ? "lose" : "")}
                                key={index} >{lettersdiscovered.includes(letterinarray.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toUpperCase() ) || win || lose? letterinarray : "_"}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="letters">
                <Letter letters={letters} />
            </div>
            <div className="answer">
                <p className="know">Já sei a palavra!</p>
                <input onChange={(e)=> setText(e.target.value)} value={text}className={operateInput} disabled={disabled}></input>
                <button onClick={guessWord} className="try">Chutar</button>
            </div>
        </div>

    )
}