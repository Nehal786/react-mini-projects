import { useState } from "react";

 let randomNumber = Math.floor(Math.random() * 100) + 1;
 
console.log('random',randomNumber);
const GuessTheNumber = () => {
    const [guessNumber,setGuessNumber] = useState('');
   
    function handleCheck() {
        if(guessNumber.trim() == ''){
            // console.log("empty")
            return;
        }
        console.log("clicked",typeof(guessNumber),typeof(randomNumber))
     

    }
    return (
        <div className="guess-conatiner">
            <p>Guess a number between 0 to 100</p>
            <div className="guess-input">
                <input type="number" className="inputNum" value={guessNumber} onChange={(e) => {
                    setGuessNumber(e.target.value);
                    // console.log(guessNumber);
                }} />
            </div>
            <div className="btns">
                <button onClick={() => setGuessNumber(0)}>Reset</button>
                <button onClick={() => {
                    handleCheck();
                }}>Check</button>
            </div>
            
        </div>
        
    )
}

export default GuessTheNumber;