basic.forever(function () {
    if (Environment.ReadLightIntensity(AnalogPin.P1) >= 50) {
        pins.digitalWritePin(DigitalPin.P9, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
})
