function rollTwoDice() {

    const diceOne = Math.floor(Math.random()*6);
    const diceTwo = Math.floor(Math.random()*6);

    function displayDice(number) {
        let diceVisual = 
        ` _______\n|       |\n|   ${number}   |\n|_______|\n`

        console.log(diceVisual)
    }

    displayDice(diceOne)
    console.log("+")
    displayDice(diceTwo)
    console.log("=")
    displayDice(diceOne + diceTwo)
    return [diceOne, diceTwo]
}

rollTwoDice();