let Set_tools_to = 0
input.onGesture(Gesture.Shake, function () {
    let tool = 0
    Set_tools_to = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
