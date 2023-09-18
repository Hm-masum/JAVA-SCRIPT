/*
//...01...Invoking Function
    function f_name() {
        console.log('I am a function')
    }

    function add() {
        var a = 10
        var b = 20
        console.log(a + b)
    }

    function sub() {
        var a = 10
        var b = 20
        console.log(a - b)
    }
    f_name()
    add()
    sub()

//...02...Function arguments and parameter
    function add(a, b) {
        var result = a + b
        console.log(result)
    }
    add(10, 20)
    add(30, 20)

    var arr1 = [1, 2, 3, 4]
    var arr2 = [5, 6, 7]
    var arr3 = [9, 7, 3, 1, 2]

    function sumOfArrry(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        console.log(sum)
    }
    sumOfArrry(arr1)
    sumOfArrry(arr2)
    sumOfArrry(arr3)

//...03...Arguments
    function test(a, b, c) {
        //console.log(JSON.stringify(arguments))
        //console.log(typeof a)
        console.log(arguments)
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i])
        }
    }
    test(10, 20, 30)

    function addAll() {
        sum = 0
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        console.log(sum)
    }
    addAll(1, 2, 3, 4, 5, 6)
    addAll(10, 2, 30)

//...04...Return value
    function addAll() {
        sum = 0
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }
    var result = addAll(1, 2, 3)
    console.log(result)

    function person(name, email) {
        return {
            name: name,
            email: email
        }
    }
    var p1 = person('HM Masum', 'masum88@gmail.com')
    console.log(p1)

//...05...Anynemous Function Expression
    var addition = function(a, b) {
        return a + b
    }

    addition(10, 40)

    setTimeout(function() {
        console.log('i will call after 5 sec')
    }, 5000)

    var another = addition
    console.log(another(7, 8))

//...06...Inner Function 
    function something(greet, name) {
        function sayHi() {
            console.log(greet, name)
        }
        sayHi()
    }
    something('Good morning\n', 'HM Masum')

//...07...Inner Function 
    function something(greet, name) {
        function getF_name() {
            if (name) {
                return name.split(' ')[0]
            } else {
                return ''
            }
        }
        var message = greet + ' ' + getF_name()
    
        console.log(message)
    }
    something('Good morning', 'HM Masum')
*/
//...08...Function Scoping
var a = 'abc'

function x() {
    //var a = 20

    function y() {
        var a = 10
        console.log(a)
    }
    console.log(a)
    y()
}
x()