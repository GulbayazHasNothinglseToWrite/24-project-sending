let Flex_Sensor = 0
basic.forever(function () {
    Flex_Sensor = pins.analogReadPin(AnalogPin.P0)
    if (Flex_Sensor > 10 && Flex_Sensor < 60) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
        radio.sendNumber(5)
    } else {
        basic.showString("Safe")
    }
    radio.setGroup(1)
})
