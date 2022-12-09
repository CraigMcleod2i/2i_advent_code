const fs = require('fs')

console.log('Running 1st line')
console.log('Running 2nd line')
console.log('Running 3rd line')
console.log('Running 4th line')
console.log('Running 5th line')
console.log('Running 6th line')
console.log('Running 7th line')
console.log('Running 8th line')
console.log('Running 9th line')
console.log('Running 10th line')

const thisFile = async () => await fs.readFileSync('./src/BreakSelf/breakSelf.js', 'utf-8', (res) => {
    return res
})

console.log('\n ====== NOW BREAK ===== \n')

thisFile().then(data=>{
    const randomNum = () => Math.floor(Math.random()*data.length)
    let newString = data.split('')
   'hackerz'.split('').forEach(char => newString[randomNum()] = char)
    fs.writeFileSync('./src/BreakSelf/breakSelf.js', newString.join(''))
})