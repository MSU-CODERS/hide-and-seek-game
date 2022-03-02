radio.onReceivedString(function (receivedString) {
    if (seeker == 1) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        if (-50 < radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
            cuteBot.stopcar()
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) >= signal) {
            cuteBot.motors(50, 50)
            signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        } else {
            cuteBot.motors(40, 20)
            signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        }
    }
})
let signal = 0
let seeker = 0
seeker = 1
let hider = 0
signal = -129
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        hider = 1
        seeker += -1
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        while (hider == 1) {
            radio.sendString("marco")
            basic.pause(200)
        }
    }
})
