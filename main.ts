input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        basic.showString("" + (input.temperature()))
    }
})
music.playMelody("- - - - - - - - ", 120)
basic.showLeds(`
    # # . # #
    . . . . .
    # . # . #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
