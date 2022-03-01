input.onButtonPressed(Button.A, function () {
    set1 += 1
    basic.showNumber(set1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(200)
    if (set_2 == set_2) {
        basic.showNumber(set_2)
        basic.showNumber(set1)
    }
})
input.onButtonPressed(Button.B, function () {
    set_2 += 1
    basic.showNumber(set_2)
})
let set_2 = 0
let set1 = 0
basic.showLeds(`
    . # # # .
    # # . # #
    # # # . #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
	
})
