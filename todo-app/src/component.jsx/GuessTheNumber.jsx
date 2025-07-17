import { use } from "react";
import { useState } from "react";

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log("random", randomNumber);
const GuessTheNumber = () => {
  const [guessNumber, setGuessNumber] = useState("");
  const[randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const[feedbackMsg, setFeedbackMsg] = useState('');
  console.log("random",randomNumber)

  function handleCheck() {
    if (guessNumber.trim() == "") {
      // console.log("empty")
      return;
    }
    // console.log("clicked", typeof guessNumber, typeof randomNumber);
    if(guessNumber == randomNumber) {
        setFeedbackMsg("Your guess is right 😎"); 

    } else if(guessNumber > randomNumber) {
        setFeedbackMsg("Your guess is Higher than the actual number!")
    } else if(guessNumber < randomNumber){
        setFeedbackMsg("Your guess is Less than the actual number!");
    }
  }

  function handleReset () {
    setGuessNumber('');
    setFeedbackMsg('');
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
  }
  return (
    <div className="guess-conatiner">
      <p>Guess a number between 0 to 100</p>
      <div className="guess-input">
        <input
          type="number"
          className="inputNum"
          value={guessNumber}
          onChange={(e) => {
            setGuessNumber(e.target.value);
            // console.log(guessNumber);
          }}
        />
      </div>
      <div className="btns">
        <button onClick={() => handleReset()}>Reset</button>
        <button
          onClick={() => {
            handleCheck();
          }}
        >
          Check
        </button>
      </div>
      {
        setFeedbackMsg && (
            <div className="feedback-msg">
            <p>{feedbackMsg}</p>
            </div>
        )
      }
    </div>
  );
};

export default GuessTheNumber;
