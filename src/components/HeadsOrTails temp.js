import React, {useState} from 'react';
import flipLogic from './flipLogic.js';
import Payout from './Payout.js';

const HeadsOrTails = () => {
    const [headsChosen, setHeadsChosen] = useState(false)
    const [tailsChosen, setTailsChosen] = useState(false)
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
        userCurrency += wager
        return (
            <div>
                <h2>You won!</h2>
                <button onClick={playAgainClick}>Play Again</button>
            </div>
        )
    } else if (!hasFlipped) {
        return (
            <div>
                <h2>Your balance is: {userCurrency}, how much would you like to wager?</h2>
                <input 
                onChange={handleChange}
                value={userInput}
                />
                <button onClick={handleClickHeads}>Heads</button><button onClick={handleClickTails}>Tails</button>
            </div>
        )
    }
}

export default HeadsOrTails;