diceASCII = {
    1:
        `    ┌─────────┐
    │         │
    │    ●    │
    │         │
    └─────────┘`,
    2:
        `    ┌─────────┐
    │  ●      │
    │         │
    │      ●  │
    └─────────┘`,
    3:
        `    ┌─────────┐
    │  ●      │
    │    ●    │
    │      ●  │
    └─────────┘`,
    4:
        `    ┌─────────┐
    │  ●   ●  │
    │         │
    │  ●   ●  │
    └─────────┘`,
    5:
        `    ┌─────────┐
    │  ●   ●  │
    │    ●    │
    │  ●   ●  │
    └─────────┘`,
    6:
        `    ┌─────────┐
    │  ●   ●  │
    │  ●   ●  │
    │  ●   ●  │
    └─────────┘`
}


const rollDice = (numberOfDice, sides) => {
    for (let x = 1; x <= numberOfDice; x++) {
        let result = Math.ceil(Math.random() * sides)
        console.log(result.toString() + ': \n')
        console.log(diceASCII[result])
    }
}

rollDice(2, 6)