import React, {useState} from 'react';
import flipLogic from './flipLogic.js'

const HeadsOrTails = () => {
    const [headsChosen, setHeadsChosen] = useState(false)
    const [tailsChosen, setTailsChosen] = useState(false)
    const [coinSideUp, setCoinSideUp] = useState(flipLogic())
    const [winState, setWinState] = useState(false)


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
        console.log(winState)
        if (headsChosen == true && coinSideUp == 0) {
            setWinState(true)
        } else if (tailsChosen == true && coinSideUp == 1) {
            setWinState(true)
        } else {
            setWinState(false)
        }
    }

    const playAgain = () => {
        if (winState == true) {
            return (
                <>
                    <button onClick={playAgainClick}>Play Again?</button>
                </>
            )
        }
    }

    const playAgainClick = () => {
        setWinState(false)
        setTailsChosen(false)
        setHeadsChosen(false)
        setCoinSideUp(flipLogic())
    }
        

    if (!winState && !headsChosen && !tailsChosen){
        return (  
            <div>
                <button onClick={handleClickHeads}>Heads</button><button onClick={handleClickTails}>Tails</button>
                <button onClick={handleClickFlip}>Flip!</button>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={playAgainClick}>Play Again?</button>
            </div>
        )
    }
    
}

export default HeadsOrTails;