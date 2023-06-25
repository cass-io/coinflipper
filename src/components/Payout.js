import React, { useState } from 'react';

const Payout = (userCurrency, userWon, wager) => {
    
    if (userWon) {
        userCurrency += wager
    } else if (!userWon) {
        userCurrency -= wager
    }

}

export default Payout;