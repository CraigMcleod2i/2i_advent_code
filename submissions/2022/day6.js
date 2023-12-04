let timer
const setTimer = () => {
    const start = Date.now()
    timer = setInterval(function () {
        let timeDifference = Date.now() - start
        console.log(Math.floor(timeDifference / 1000))
    }, 1000); // update every second
}

setTimer()
setTimeout(stopTimer => {
    clearInterval(timer)
}, 5000)