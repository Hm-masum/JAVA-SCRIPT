/*
//...01...Iterate Obj And HashOwn property
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

    console.log(Object.keys(sqr1))

    for (var i in sqr1) {
        console.log(i)
    }

//...02...First Prototyphical inheritance
    function shape() {
    
    }

    shape.prototype = {
        common: function() {
            console.log('common')
        }
    }

    function square(width) {
        this.width = width
    }

    square.prototype = Object.create(shape.prototype)

    square.prototype.draw = function() {
        console.log('draw')
    }

    var shp = new shape()
    var sqr = new square(45)

//...03...Reset Constructor After inheritance
    function shape() {
    
    }
    shape.prototype.common = function() {
        console.log('common')
    }

    function square(width) {
        this.width = width
    }

    square.prototype = Object.create(shape.prototype)
    square.prototype.constructor = square

    square.prototype.draw = function() {
        console.log('draw')
    }
    square.prototype.test = function() {

    }

    var shp = new shape()
    var sqr = new square(45)

//...04...Calling Super With Call method
    function shape(color) {
           this.color = color
    
    }
    shape.prototype.common = function() {
        console.log('common')
    }

    function square(width, color) {
           shape.call(this, color)
           this.width = width
    }

    square.prototype = Object.create(shape.prototype)
    square.prototype.constructor = square
    
    square.prototype.draw = function() {
        console.log('draw')
    }
    var sqr = new square(45, 'green')

//...05...Creating Extends function
    function Extends(parent, child) {
        child.prototype = Object.create(parent.prototype)
        child.prototype.constructor = child
    }

    function shape(color) {
        this.color = color
    }
    shape.prototype.common = function() {
        console.log('common')
    }

    function square(width, color) {
        shape.call(this, color)
        this.width = width
    }

    Extends(shape, square)

    square.prototype.draw = function() {
        console.log('draw')
    }
    var sqr = new square(45, 'green')

    function Circle(radius, color) {
        shape.call(this, color)
        this.radius = radius
    }
    Extends(shape, Circle)

//...06...Method Overridding
    function Extends(parent, child) {
        child.prototype = Object.create(parent.prototype)
        child.prototype.constructor = child
    }

    function shape(color) {
        this.color = color
    }
    shape.prototype.common = function() {
        console.log('common')
    }

    function square(width, color) {
        shape.call(this, color)
        this.width = width
    }

    Extends(shape, square)

    square.prototype.draw = function() {
        console.log('draw')
    }
    var sqr = new square(45, 'green')

    function Circle(radius, color) {
        shape.call(this, color)
        this.radius = radius
    }
    Extends(shape, Circle)

//...07...Polymorphism
    function Extends(parent, child) {
        child.prototype = Object.create(parent.prototype)
        child.prototype.constructor = child
    }

    function shape(color) {
        this.color = color
    }
    shape.prototype.common = function() {
        console.log('I am calling From shape and overidden')
    }

    function square(width, color) {
        shape.call(this, color)
        this.width = width
    }
    
    Extends(shape, square)

    square.prototype.draw = function() {
        console.log('draw')
    }
    square.prototype.common = function() {
        console.log('I am calling From squre and overidden')
    }
    var sqr = new square(45, 'green')

    function Circle(radius, color) {
        shape.call(this, color)
        this.radius = radius
    }
    Extends(shape, Circle)

    Circle.prototype.common = function() {
        console.log('I am calling From Circle and overidden')
    }

    var c = new Circle(4, 'Black')
    var s = new shape('Black')
    var shapes = [s, c, sqr]
    for (var i of shapes) {
        i.common()
    }
*/
//...08...Inhesritanc And Composition
var canWalk = {
    walk: function() {
        console.log("Walking...")
    }
}

var canEat = {
    eat: function() {
        console.log('Eating...')
    }
}

function mixin(terget, ...sources) {
    Object.assign(terget, ...sources)
}
//var person = Object.assign({}, canWalk, canEat)
//person.name = 'HM Masum'
function Person(name) {
    this.name = name
}
//Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)
var person = new Person('Hm masum')
console.log(person)