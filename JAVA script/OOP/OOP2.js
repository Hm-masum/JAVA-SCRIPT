/*
//...01...Abstruction  (Doing Hide )
    var Ractangle = function(width, height) {
        this.width = width
        this.height = height
        var position = {                  //for hide using var or let
            x: 10,
            y: 29
        }

        var printProperties = function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }.bind(this)

        this.draw = function() {
            console.log('I am masum')
            printProperties()
            console.log('position : x=' + position.x + ' position : Y=' + position.y)
        }
    }
    var rect = new Ractangle(10, 5)
    rect.draw()

//...02...Access private variable
    var Ractangle = function(width, height) {
        this.width = width
        this.height = height
        var position = {
            x: 10,
            y: 29
        }

        var printProperties = function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }.bind(this)

        this.getPosition = function() {
            return position;
        }

        this.draw = function() {
            console.log('I am masum')
            printProperties()
            console.log('position : x=' + position.x + ' position : Y=' + position.y)
        }


    }
    var rect = new Ractangle(10, 5)
    rect.draw()
    console.log(rect.getPosition())

//...03...Getter setter
    var Ractangle = function(width, height) {
        this.width = width
        this.height = height
        var position = {
            x: 10,
            y: 29
        }

        var printProperties = function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }.bind(this)
    
        this.draw = function() {
            console.log('I am masum')
            printProperties()
            console.log('position : x=' + position.x + ' position : Y=' + position.y)
        }
    
        Object.defineProperty(this, 'position', {
            get: function() {
                return position
            },
            set: function(value) {
                position = value
            }
        })
    }
    var rect = new Ractangle(10, 5)
    rect.draw()

    rect.position = {
        x: 123,
        y: 432
    }
    console.log(rect.position)

//...04...Protypical Inheritance
    function person(name) {
        this.name = name
    }
    var p1 = new person('HM masum')
    console.log(p1)

//...05...Property discripter(getOwnPropertyDescriptor)
    var person = {
        name: 'HM Masum'
    }

    // for (var i in person) {
    //     console.log(i)
    // }
    //console.log(Object.keys(person))
    var descripor = Object.getOwnPropertyDescriptor(person, 'name')
    console.log(descripor)

//...06...toString discripter
    var person = {
        name: 'HM Masum'
    }
    let baseObj = Object.getPrototypeOf(person)
    let descripor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
    console.log(descripor)

//...07...property discripter
    var person = {
        name: 'HM Masum'
    }
    Object.defineProperty(person, 'name', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: 'Habibullah mohammad masum'
    })

//...08...constructor Prototype
    function person(name) {
        this.name = name
    }
    person.prototype.pI = 3.1416
    var p1 = new person('HM Masum')
    var p2 = new person('Masum')
    console.log(Object.getPrototypeOf(p1))
    console.log(person.prototype)
    console.log(p1)
    console.log(p2)

//...09...Instance VS Prototype
    function square(width) {
        this.width = width
    }
    square.prototype = {
        draw: function() {
            console.log('draw')
        },
        toString: function() {
            return 'My width is = ' + this.width
        }
    }
    var sqr1 = new square(10)
    var sqr2 = new square(5)
*/
//...10...USing Instance and Prototype
function square(width) {
    this.width = width
    this.getWidth = function() {
        console.log('width is ' + this.width)
        this.draw()
    }
}
square.prototype = {
    draw: function() {
        console.log('draw')
    },
    toString: function() {
        return 'My width is = ' + this.width
    }
}
var sqr1 = new square(10)
var sqr2 = new square(5)