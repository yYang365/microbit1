def on_logo_touched():
    doSomething()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_button_pressed_a():
    global running
    running = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def doSomething():
    global count
    if not (running):
        count = 0
        for x in range(5):
            for y in range(5):
                if led.point(x, y):
                    count += 1
        basic.clear_screen()
        if count:
            basic.show_number(count)

def on_button_pressed_b():
    global running
    running = 0
    doSomething2()
input.on_button_pressed(Button.B, on_button_pressed_b)

def doSomething2():
    global listX, listY
    listX = []
    for x2 in range(5):
        listY = []
        for y2 in range(5):
            listY.append(led.point(x2, y2))
        listX.append(listY)
listY: List[bool] = []
listX: List[List[bool]] = []
count = 0
running = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    if running:
        led.toggle(randint(0, 4), randint(0, 4))
basic.forever(on_forever)
