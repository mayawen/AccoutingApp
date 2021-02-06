module.exports = function countdown(tick) {
    let c = 10

    let timer = setInterval(_ => {
        tick(c --) // what does tick do here? why does it take the value of c?
        //console.log(c) //log to shell
        if (c === 0)
            clearInterval(timer)
    }, 1000)

}