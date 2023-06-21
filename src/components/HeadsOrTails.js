import React, {useState} from 'react';
import flipLogic from './flipLogic.js'

const HeadsOrTails = () => {
    const [heads, setHeads] = useState(false)
    const [tails, setTails] = useState(false)
    const [coinTossResult, setCoinTossResult] = useState(0)

    const handleClick = () => {
        let result = flipLogic()
    }

    return (
        <div>
            <button>Heads</button>
        </div>
    )
}

export default HeadsOrTails;