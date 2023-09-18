/*
//...01...Currying
    function add(a, b, c) {
        return a + b + c
    }
    add(41, 52, 63)

    function currying(a) {
        return function(b) {
            return function(c) {
            return a + b + c
            }
        }
    }
    var result = currying(5)(10)(15)
    console.log(result)

//...02...COMPOSITION
    function print(inp) {
        console.log(inp)
    }

    function multiply(n) {
        return n * 5
    }

    function add(a, b) {
        return a + b
    }
    print(multiply(add(5, 2)))

//...03...Context
    function a() {
        b()
        console.log('I am Functin A')
    }

    function b() {
        d()
        console.log('I am Functin B')
    }

    function c() {
        console.log('I am Functin C')
    }

    function d() {
        c()
        console.log('I am Functin D')
    }
    a()
    console.log('I am Global')
*/
//...04...