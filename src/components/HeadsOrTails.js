import React, {useState} from 'react';


const HeadsOrTails = () => {
    //flipLogic randomizes the coin and must be initialized first
    const flipLogic = () => {
        return Math.floor(Math.random() * 2)
    }
    
    // Hooks
    const [sideChosen, setSideChosen] = useState(null) // tracks which side of the coin the user has selected
    const [sideUp, setSideUp] = useState(flipLogic()) // tracks which side of the coin is face up
    const [wager, setWager] = useState(0) // tracks the users selected wager
    const [balance, setBalance] = useState(10) // tracks the users funds, initialized at 10, no maximum.
    const [gameState, setGameState] = useState(0) // tracks the state of the game, this variable simplifies the progression sequence 
    
    //handleClick functions to change the gamestate
    const handleHeadsClick = () => {
        setSideChosen(0)
    }
    
    const handleTailsClick = () => {
        setSideChosen(1)
    }
    
    const handlePlayClick = () => {
        setSideChosen(null)
        setSideUp(flipLogic())
        setGameState(0)
    }

    const handleChange = (event) => {
        setWager(event.target.value)
    }

    const handleWagerClick = () => {
        setGameState(1)
    }

    const handleYesClick = () => {
        if (typeof(wager) != "number") {
            setGameState(4)
        } else if (sideUp == sideChosen){
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
            <div>
                <h3>You are out of poopcoins! Better luck next time.</h3>
            </div>
        )
    } else if (gameState == 0) {
        return (
            <div>
                <div><p3>you have {balance} poopcoin</p3></div>
                <button onClick={handleHeadsClick}>Heads</button> <button onClick={handleTailsClick}>Tails</button>
                <div><input
                type="text"
                id="wager"
                name="wager"
                onChange={handleChange}
                value={wager}
                /></div>
                <button onClick={handleWagerClick}>Wager</button>
            </div>
        )
    } else if (gameState == 1) {
        return (
            <div>
                <h3>Wager {wager}?</h3>
                <div><button onClick={handleYesClick}>Yes</button><button onClick={handleNoClick}>No</button></div>
            </div>
        )
    } else if (gameState == 2) {
        return (
            <div>
                <h3>You won {wager} poopcoins!</h3>
                <button onClick={handleWinClick}>Claim</button>
            </div>
        )
    } else if (gameState == 3) {
        return (
            <div>
                <h3>You lose!</h3>
                <button onClick={handleLoseClick}>Play Again?</button>
            </div>
        )
    } else if (gameState == 4) {
        return (
            <div>
                <div><h3>Please wager only in numerals, and no more than your current balance.</h3></div>
                <div><p3>you have {balance} poopcoin</p3></div>
                <button onClick={handleHeadsClick}>Heads</button> <button onClick={handleTailsClick}>Tails</button>
                <div><input
                type="text"
                id="wager"
                name="wager"
                onChange={handleChange}
                value={wager}
                /></div>
                <button onClick={handleWagerClick}>Wager</button>
            </div>
        )
    }
    
    
}

export default HeadsOrTails;