input.onSound(DetectedSound.Loud, function () {
    magicbit.Servo(magicbit.Servos.S1, 0)
    basic.pause(1000)
    magicbit.Servo(magicbit.Servos.S1, 180)
})
