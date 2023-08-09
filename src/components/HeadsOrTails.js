import React, {useState} from 'react';
import './HeadsOrTails.css';

const HeadsOrTails = () => {
    //flipLogic randomizes the coin and must be initialized first
    const flipLogic = () => {
        return Math.floor(Math.random() * 2)
    }
    
    /// CSS variable functions

    const sideStyle = () => {
        if (sideChosen == 0) {
            return 'button-pressed'
        } else return 'button'
    }


    // Hooks
    const [sideChosen, setSideChosen] = useState(null) // tracks which side of the coin the user has selected
    const [sideUp, setSideUp] = useState(flipLogic()) // tracks which side of the coin is face up
    const [wager, setWager] = useState(null) // tracks the users selected wager
    const [balance, setBalance] = useState(10) // tracks the users funds, initialized at 10, no maximum.
    const [gameState, setGameState] = useState(0) // tracks the state of the game, this variable simplifies the progression sequence 
    const [userInput, setUserInput] = useState(null) // updates the value of the input box

    //handleClick functions to change the gamestate
    const handleHeadsClick = () => {
        setSideChosen(0)
    }
    
    const handleTailsClick = () => {
        setSideChosen(1)
    }

    const handleChange = (event) => {
       setUserInput(event.target.value)
    }

    const handleWagerClick = () => {
        setWager(userInput)
        if (sideChosen == null) {
            setGameState(0)
        } else if (userInput > balance) {
            setGameState(4)
        }else {
            setGameState(1)
        }
        
    }

    const handleYesClick = () => {
        console.log(wager, typeof(wager))
        if (wager > balance) {
            setGameState(5)
        } else if (isNaN(wager) || (wager == null)) {
            setGameState(4)
        } else if (sideUp == sideChosen) {
            setGameState(2)
        } else {
            setGameState(3)
        }
    }

    const handleNoClick = () => {
        setGameState(0)
    }

    const handleWinClick = () => {
        setBalance(parseInt(balance) + parseInt(wager))
        setSideChosen(null)
        setSideUp(flipLogic())
        setGameState(0)
    }

    const handleLoseClick = () => {
        setBalance(parseInt(balance) - parseInt(wager))
        setSideChosen(null)
        setSideUp(flipLogic())
        setGameState(0)
    }
    // Conditional statement to return various interfaces based on gamestate
    if (balance <= 0) {
        return (
            <div class="bg">
                <h3 class='loss'>You are out of poopcoins! Better luck next time.</h3>
            </div>
        )
    } else if (gameState == 0) {
        return (
            <div class="bg">
                <div class='start-screen'><p3>you have {balance} poopcoin</p3></div>
                <button class={(sideChosen == 0) ? 'button-pressed' : 'button'} onClick={handleHeadsClick}>Heads</button> <button class={(sideChosen == 1) ? 'button-pressed' : 'button'} onClick={handleTailsClick}>Tails</button>
                <div><input
                type="text"
                id="wager"
                name="wager"
                onChange={handleChange}
                value={userInput}
                /></div>
                <button onClick={handleWagerClick}>Wager</button>
            </div>
        )
    } else if (gameState == 1) {
        return (
            <div class="bg">
                <h3>Wager {wager}?</h3>
                <div><button class='button' onClick={handleYesClick}>Yes</button><button class='button' onClick={handleNoClick}>No</button></div>
            </div>
        )
    } else if (gameState == 2) {
        return (
            <div class="bg">
                <h3>You won {wager} poopcoins!</h3>
                <button class='button' onClick={handleWinClick}>Claim</button>
            </div>
        )
    } else if (gameState == 3) {
        return (
            <div class="bg">
                <h3>You lose!</h3>
                <button class='button' onClick={handleLoseClick}>Play Again?</button>
            </div>
        )
    } else if (gameState == 4) {
        return (
            <div class="bg">
                <div><h3>Please wager only in numerals, and no more than your current balance.</h3></div>
                <div class='start-screen'><p3>you have {balance} poopcoin</p3></div>
                <button class={(sideChosen == 0) ? 'button-pressed' : 'button'} onClick={handleHeadsClick}>Heads</button> <button class={(sideChosen == 1) ? 'button-pressed' : 'button'} onClick={handleTailsClick}>Tails</button>
                <div><input
                type="text"
                id="wager"
                name="wager"
                onChange={handleChange}
                value={userInput}
                /></div>
                <button class='button' onClick={handleWagerClick}>Wager</button>
            </div>
        )
    } else if (gameState == 5) {
        return (
            <div class="bg">
                <div><h3>You cannot wager more than your current balance.</h3></div>
                <button onClick={setWager(0) + setGameState(0)}>OK</button>
            </div>
        )
    }
    
    
}

export default HeadsOrTails;