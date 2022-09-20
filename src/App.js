import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca5.png"

function Letter({ letters }) {
    return (
        <div>
            {letters.map(l => {
                return <button class="letter">{l}</button>;
            })}
        </div>
    )
}

export default function App() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return (
        <div class="content">
            <div class="upper">
                <img src={forca0} alt="" />
                <div class="side">
                    <button class="choose">Escolher palavra!</button>
                    <div class="spaces">
                        <p class="space">_</p>
                        <p class="space">_</p>
                        <p class="space">_</p>
                    </div>
                </div>
            </div>
            <div class="letters">
                <Letter letters={letters} />
            </div>
            <div class="answer">
                <p class="know">Já sei a palavra!</p>
                <input class="word"></input>
                <button class="try">Chutar</button>
            </div>
        </div>

    )
}