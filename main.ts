makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
basic.showLeds(`
    . . . . .
    # . # . #
    # . # # .
    # . # . .
    # . # . .
    `)
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(makerbit.irButton())
})
