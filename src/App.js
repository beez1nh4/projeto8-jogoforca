import forca0 from "./assets/forca0.png"
/* import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca5.png" */


function Letter({ letters }) {
    return (
        <>
            {letters.map((l, index) => {
                return <button key={index} className="letter">{l}</button>;
            })}
        </>
    )
}

export default function App() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return (
        <div className="content">
            <div className="upper">
                <img src={forca0} alt="" />
                <div className="side">
                    <button className="choose">Escolher palavra!</button>
                    <div className="spaces">
                        <p className="space">_</p>
                        <p className="space">_</p>
                        <p className="space">_</p>
                    </div>
                </div>
            </div>
            <div className="letters">
                <Letter letters={letters} />
            </div>
            <div className="answer">
                <p className="know">Já sei a palavra!</p>
                <input className="word"></input>
                <button className="try">Chutar</button>
            </div>
        </div>

    )
}