input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        start_time = input.runningTime()
        start += 1
        basic.showNumber(start)
        basic.pause(500)
    }
    start = 0
})
let start_time = 0
let start = 0
start = 0
basic.forever(function () {
	
})
