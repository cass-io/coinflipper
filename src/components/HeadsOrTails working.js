import React, {useState} from 'react';
import flipLogic from './flipLogic.js';
import Payout from './Payout.js';

const HeadsOrTails = () => {
    const [sideChosen, setSideChosen] = useState(null)
    const [coinSideUp, setCoinSideUp] = useState(flipLogic())
    const [winState, setWinState] = useState(false)

    const [hasFlipped, setHasFlipped] = useState(false)
    let [userWon, setUserWon] = useState(false)


    let userCurrency = 10
    const [wager, setWager] = useState(0)
    
    const [userInput, setUserInput] = useState(null)

    const handleChange = (event) => {
        console.log('qqq4', typeof(event.target.value))
        setUserInput(event.target.value);
    }

    const handleClickHeads = () => {
        console.log('qt2,',winState,coinSideUp)
        setHeadsChosen(true)
        setTailsChosen(false)
    }

    const handleClickTails = () => {
        console.log('qt 1',tailsChosen)
        setTailsChosen(true)
        setHeadsChosen(false)
    }

    const handleClickFlip = () => {
        console.log(`Winstate is ${winState}, tailsChosen is ${tailsChosen}, headsChosen is ${headsChosen}.`)
        setHasFlipped(true)
        if (headsChosen == true && coinSideUp == 0) {
            setWinState(true)
        } else if (tailsChosen == true && coinSideUp == 1) {
            setWinState(true)
        } else {
            setWinState(false)
        }
    }

    const playAgainClick = () => {
        setWinState(null)
        setTailsChosen(false)
        setHeadsChosen(false)
        setCoinSideUp(flipLogic())
        setHasFlipped(false)
    }

    const betClick = () => {
        setWager(userInput)
    }

    if (winState) {
        userCurrency += parseInt(wager)
        return (
            <div>
                    <h2>You win!</h2>
                    <button onClick={playAgainClick}>Play Again?</button>
                    <h2>Your current balance is: {userCurrency}</h2>
            </div>
        )
    } else if (!winState && !headsChosen && !tailsChosen){
        return (  
            <div>
                <button onClick={handleClickHeads}>Heads</button><button onClick={handleClickTails}>Tails</button>
                <p>Your current balance is: {userCurrency}.
                Input your wager below, double or nothing.</p>
                
                <input
                type="text"
                id="userInput"
                name="userInput"
                onChange={handleChange}
                value={userInput}
                />
                <button onClick={betClick}>Bet!</button>
            </div>
        );
    } else if ((headsChosen || tailsChosen) && !hasFlipped){
        return (
            <div>
                <button onClick={handleClickFlip}>Flip!</button>
            </div>
        )
    } else if (!winState && hasFlipped) {
        userCurrency -= wager
        return (
            <div>
                <h2>You lost.</h2>
                <p>Your current balance is {userCurrency}</p>
                <button onClick={playAgainClick}>Play Again?</button>
            </div>
        )
    }
}

export default HeadsOrTails;