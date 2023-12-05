const string = 'aaabbbbcccccddddddddeffg'
const unique = [...new Set(string.split(''))]
let comprStr = unique.reduce((o,k)=> {
    o[k] = [undefined, undefined]
    return o;
},{})

console.log(comprStr)

unique.forEach((c,i,a) => {
    let arr = string.split('')

    let curr = a.slice(i, a.length)

})