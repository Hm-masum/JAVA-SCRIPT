/*
//...01...Object literal
    var rect = {
        width: 100,
        height: 50,
    
        draw: function() {
            console.log('I am masum')
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
    rect.draw()
    rect.height = 100
    rect.draw()

//...02... this pointer
    var rect = {
        width: 100,
        height: 50,
    
        draw: function() {
            console.log('I am masum')
            this.printProperties()
        },
        printProperties: function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
    rect.draw()

    var another = {
        width: 15,
        height: 20,
        print: rect.printProperties
    }
    console.log(another.print)

    function myFunc() {
        console.log(this)
    }
    new myFunc()

//...03...Factory pattern
    var createRect = function(width, height) {
        return {
            width: width,
            height: height,
    
            draw: function() {
                console.log('I am masum')
                this.printProperties()
            },
            printProperties: function() {
                console.log('My width is ' + this.width)
                console.log('My height is ' + this.height)
            }
        }
    }
    var rect1 = createRect(1, 8)
    rect1.draw()
    var rect2 = createRect(1, 5)
    rect2.draw()

//...04...Constructor pattern
    var Ractangle = function(width, height) {
        this.width = width
        this.height = height

        this.draw = function() {
            console.log('I am masum')
            this.printProperties()
        }
        this.printProperties = function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
    var rect = new Ractangle(1, 5)
    rect.draw()

//...05...new Keyword
    var Ractangle = function(width, height) {
        this.width = width
        this.height = height
    
        this.draw = function() {
            console.log('I am masum')
            this.printProperties()
        }
        this.printProperties = function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }


    function myNew(Constructor) {
        var obj = {}
        Object.setPrototypeOf(obj, Constructor.prototype)
        var argsArray = Array.prototype.slice.apply(arguments)
        Constructor.apply(obj, argsArray.slice(1))
    
        return obj
    }
    var rect = myNew(Ractangle, 45, 30)
    rect.draw()

//...06...constructor property
    var str = new String('str')
    console.log('My String is ' + str)

//...07...Bind,call,apply
    function myFunc() {
        console.log(this)
        console.log(this.a + this.b)
    }
    myFunc.call({ a: 45, b: 35 })
    myFunc.apply({ a: 25, b: 35 })

    function myFunc1(c, d) {
        console.log(this)
        console.log(this.a + this.b + c + d)
    }
    myFunc1.call({ a: 45, b: 35 }, 10, 5)
    myFunc1.apply({ a: 25, b: 35 }, [10, 5])         //need array
    var testBind = myFunc1.bind({ a: 25, b: 35 })
    testBind(5, 7)

//...08...Pass By value
    var n = 10;

    function change(n) {
        n = n + 100
        console.log(n)
    }
    change(n)
    console.log(n)
*/
//...09...Pass By reference
var obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}

changeMe(obj)
console.log(obj)