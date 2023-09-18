/*
//...01... Map Function    //Orginal array k touch korena
    var arr = [1, 2, 3]
    var sqr = arr.map(function(value) {
        //return Math.random() * 100
        return value * value
    })
    console.log(arr)
    console.log(sqr)

//...02...Implement Map method
    var arr = [1, 2, 3, 4, 5]

    function myMap(arr) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i] * arr[i]
            newArr.push(temp)
        }
        return newArr
    }    
    console.log(myMap(arr))

//...03...Implement Map method with callback
    var arr = [1, 2, 3, 4, 5]

    function myMap(arr, cb) {    
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            var temp = cb(arr[i], i, arr)
            newArr.push(temp)
        }
        return newArr
    }

    var qb = myMap(arr, function(value) {
        return value * value * value
    })

    var mten = myMap(arr, function(value) {
        return value * 10
    })
    console.log(arr)
    console.log(qb)
    console.log(mten)

//...04...Filter Function    //Orginal array k touch korena
    var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
    var filteredArr = arr.filter(function(value) {
        return value % 2 == 0
    })
    console.log(filteredArr)

//...05...Implement Filter method
    var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]
    function myFilter(arr){
        var newArr=[]
        for(var i=0;i<arr;i++){
            if(arr[i] % 2==0){
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    console.log(myFilter(arr))

//...06...Implement Filter method with call back
    var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

    function myFilter(arr, cb) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)) {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    console.log(myFilter(arr, function(value) {
        return value % 2 == 0
    }))
        console.log(myFilter(arr, function(value) {
        return value > 4
    }))

//...07...Reduce Function  
    var arr = [1, 2, 3, 4, 5]
    var sum = arr.reduce(function(prev, curr) {
        return prev + curr
    }, 100)
    var max = arr.reduce(function(prev, curr) {
        return Math.max(prev, curr)
    }, 0)
    console.log(sum)
    console.log(max)

//...08...Implementation Reduce Function  
    var arr = [1, 2, 3, 4, 5]

    function myReduce(arr, cb, acc) {
        for (var i = 0; i < arr.length; i++) {
            acc = cb(acc, arr[i])
        }
        return acc
    }
    var sum = myReduce(arr, function(prev, curr) {
        return prev + curr
    }, 0)

    var max = myReduce(arr, function(prev, curr) {
       return Math.max(prev, curr)
    }, 0)

    var min = myReduce(arr, function(prev, curr) {
        return Math.min(prev, curr)
    }, arr[0])

    console.log(sum, max, min)

//...09...find method
    var arr = [7, 4, 8, 6, 9, 2, 1, 7, 3]
    var result = arr.find(function(value) {
      return value == 9
    })
    console.log(result)

//...10...find-index  method
    var arr = [7, 4, 8, 6, 9, 2, 1, 7, 3]
    var result = arr.findIndex(function(value) {
        return value == 9
    })
    console.log(result)
*/
//...11...Implemention find & find-index  method
var arr = [7, 4, 8, 6, 9, 2, 1, 7, 3]

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            //return arr[i]
            return i
        }
    }
}
var result = myFind(arr, function(value) {
    return value == 9
})
console.log(result)