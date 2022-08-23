input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    doSomething()
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    running = 1
})
function doSomething() {
    
    if (!running) {
        count = 0
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (led.point(x, y)) {
                    count += 1
                }
                
            }
        }
        basic.clearScreen()
        if (count) {
            basic.showNumber(count)
        }
        
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    running = 0
    doSomething2()
})
function doSomething2() {
    
    listX = []
    for (let x2 = 0; x2 < 5; x2++) {
        listY = []
        for (let y2 = 0; y2 < 5; y2++) {
            listY.push(led.point(x2, y2))
        }
        listX.push(listY)
    }
}

let listY : boolean[] = []
let listX : boolean[][] = []
let count = 0
let running = 0
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    if (running) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
    
})
