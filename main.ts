input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        start += 1
        basic.showNumber(start)
        basic.pause(1000)
    }
    start = 0
})
let start = 0
start = 0
