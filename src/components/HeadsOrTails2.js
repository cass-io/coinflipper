import React, {useState} from 'react';
import flipLogic from './flipLogic.js';
import Payout from './Payout.js';

const HeadsOrTails = () => {
    const [userInput, setUserInput] = useState(0)
    const [headsChosen, setHeadsChosen] = useState(null)
    const [tailsChosen, setTailsChosen] = useState(null)
    const [coinSideUp, setCoinSideUp] = useState(flipLogic())
    const [winState, setWinState] = useState(null)
    const [hasFlipped, setHasFlipped] = useState(false)
    const [userCurrency, setUserCurrency] = useState(10)
    const [wager, setWager] = useState(0)

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const headsClick = () => {
        setHeadsChosen(true)
        setTailsChosen(false)
    }

    const tailsClick = () => {
        setTailsChosen(true)
        setHeadsChosen(false)
    }

    const flipClick = () => {
        setWager(userInput)
        setHasFlipped(true)
    }

    if (!hasFlipped && !headsChosen && !tailsChosen) {
        return (
            <div>
                <h2>Heads or tails?</h2>
                <button onClick={headsClick}>Heads</button><button onClick={tailsClick}>Tails</button>
            </div>
        )
    } else if (!hasFlipped && tailsChosen && !headsChosen) {
        return (
            <div>
                <h2>You've selected: Tails</h2>
                <p>Please select an amount you'd like to wager.</p>
                <input
                onChange={handleChange}
                value={userInput}
                />
                <button onClick={flipClick}>Flip for {userInput}</button>
            </div>
        )
    } else if (!hasFlipped && !tailsChosen && headsChosen) {
        return (
            <div>
                <h2>You've selected: Heads</h2>
                <p>Please select an amount you'd like to wager.</p>
                <input
                onChange={handleChange}
                value={userInput}
                />
                <button onClick={flipClick}>Flip for {userInput}</button>
            </div>
        )
    } else if (hasFlipped && (headsChosen == true) && (coinSideUp == 0) && (winState == null)) {
        setUserCurrency(userCurrency + wager)
        setWinState(true)
        return (
            <div>
                <h2>You won!</h2>
                <button>Claim {wager}</button>
            </div>
        );
    } else if (hasFlipped && (tailsChosen == true) && (coinSideUp == 1) && (winState == null)) {
        setUserCurrency(userCurrency + wager)
        setWinState(true)
        return (
            <div>
                <h2>You won!</h2>
                <button>Claim {wager}</button>
            </div>
        );
    } else if (hasFlipped && (tailsChosen == true && coinSideUp != 1) || (headsChosen == true && coinSideUp != 0)) {
        return (
            <div>
                <h2>
                    Oops!
                </h2>
            </div>
        )
    }
}
export default HeadsOrTails;