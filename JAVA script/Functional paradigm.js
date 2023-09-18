/*
//...01...Pure Function
    function sqr(n) {
        return n * n
    }
    console.log(sqr(2))
    console.log(sqr(2))
    console.log(sqr(2))

//...02...Not Pure Function
    var n = 10
    function change() {
        n = 100
    }
    change()
    console.log(n)

    var point = { x: 45, y: 15 }
    function printpoint(point) {
        point.x = 100
        point.y = 200
    }
    printpoint(point)
    console.log(point)

//...03...First class Function
    function add(a, b) {
        return a + b
    }
    var sum = add
    console.log(sum(4, 5))

    var arr = []
    arr.push(add)
    console.log(arr)
    console.log(arr[0](5, 3))

    var obj = {
        sum: add
    }
    console.log(obj)
    console.log(obj.sum(7, 9))

//...04...Higher Order Function
    function add(a, b) {
       return a + b
    }

    function manipulate(a, b, func) {
        var c = a + b
        var d = a - b

        // function multifly() {
        //     var m = func(a, b)
        //     return c * d * m
        // }
        return function() {
            var m = func(a, b)
            return c * d * m
        }
    }
    var multifly = manipulate(3, 4, add)
    console.log(multifly())

//...05...Closer
    var b = 10;

    function a() {
        var x=5
    
        return function(){
            console.log(x)
        }
    }
    var abc=a()
    console.dir(abc)

//...06...Callback
    function sample(a, b, cb) {    
        var c = a + b
        var d = a - b
        var result = cb(c, d)
        return result
    }

    function sum(a, b) {    
        return a + b
    }
    var result = sample(5, 8, sum)
    console.log(result)

    var result2 = sample(5, 8, function(c, d) {    
        return c - d
    })
    console.log(result2)

    var result3 = sample(5, 8, function(c, d) {
        return c * d
    })
    console.log(result3)

//...07...For Each implementation
    var arr = [1, 2, 3, 4, 5]
    sum = 0
    arr.forEach(function(value, index, arr) {
        //console.log(value, index, arr)
        sum += value
    })
    console.log(sum)
*/
//...08...For Each implementation
var arr = [1, 2, 3, 4, 5]

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
var sum = 0;
forEach(arr, function(value, index, arr) {
    console.log(value, index, arr)
    sum += value
})
console.log(sum)