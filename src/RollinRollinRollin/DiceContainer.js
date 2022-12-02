import React, {useState, useEffect} from 'react';
import Dice from './Dice';
const DiceContainer = ({}) => {

    const [startingPos, setStartingPos] = useState({1: {y: 0, x: 0, z:0}, 2: {y:0, x: 0, z: 0}})
    const rollDice = () => {
    const dice1Rand = (((Math.ceil(Math.random()*9)+3) * 90) + 5)
    const dice2Rand = (((Math.ceil(Math.random()*9)+3) * 90) + 5) 
    setStartingPos({...startingPos, 1: {y:dice1Rand,x:dice1Rand,z:dice1Rand}})
    document.querySelector('#dice1').style.transform = `translate(-50%, -50%) rotateY(${dice1Rand}deg) rotateX(${dice2Rand}deg) rotateZ(${dice2Rand}deg)`
    document.querySelector('#dice2').style.transform = `translate(100%, 100%) rotateY(${dice2Rand}deg) rotateX(${dice2Rand}deg) rotateZ(${dice2Rand}deg)`
    }
    return(
        <div id='dice-container' onClick={rollDice}>
            <Dice diceNum={1}/>
            <Dice diceNum={2}/>
        </div>
    )
}
export default DiceContainer