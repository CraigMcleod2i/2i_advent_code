const fs = require('fs')

const thisFile = fs.readFileSync('./submissions/day9.js', 'utf-8')
    
let count = 1
console.log(`Run ${count}: ok`)
console.log('breaking next')
const modifyFile = thisFile.replaceAll('log', 'love').replace('1', (count++).toString())
fs.writeFileSync('./submissions/day9.js',  modifyFile)
