input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        start_time = input.runningTime()
        start += 1
        basic.showNumber(start)
        END_TIME = input.runningTime()
        basic.pause(1000 - (END_TIME - start_time))
    }
    start = 0
})
let END_TIME = 0
let start_time = 0
let start = 0
start = 0
