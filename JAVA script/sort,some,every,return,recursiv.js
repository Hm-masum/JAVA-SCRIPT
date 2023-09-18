/*
//...01...Sorting method
    var persons = [{
            name: 'A',
            Age: 24
        },
        {
            name: 'B',
            Age: 19
        },
        {
            name: 'C',
            Age: 26
        },
        {
            name: 'D',
            Age: 21
        },
    ]
    var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 2, 100]
        // arr.sort()
        // console.log(arr)
        // persons.sort()
        // console.log(persons)
    arr.sort(function(a, b) {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    })
    console.log(arr)

    persons.sort(function(a, b) {
        if (a.Age > b.Age) {
            return 1
        } else if (a.Age < b.Age) {
            return -1
        } else {
            return 0
        }
    })
    console.log(persons)

//...02...Some and every method
    var arr = [4, 8, 1, 6, 7, 9, 4, -3, 5, 2, 100]
    var res1 = arr.every(function(value) {
        // return value % 2 == 0
        return value > 0
    })
    console.log(res1)

    var res2 = arr.some(function(value) {
        return value > 0
    })
    console.log(res2)

//...03...Return Method
    function greet(msg) {
        function greetings(name) {
            return msg + ', ' + name + '!'
        }
        return greetings
    }
    var gm = greet('GOOD MORNING')
    var gn = greet('GOOD NIGHT')
    var msg = gm('HM MASUM')
    console.log(msg)
    console.log(gn('RAKIB'))
    
//...04...Return Method 2
    function base(b) {
        return function(n) {
            var result = 1
            for (var i = 1; i <= b; i++) {
                result *= n
            }
            return result
        }
    }
    var Base = base(10)
    console.log(Base(2))

    var Base = base(5)
    console.log(Base(2))

//...05...Recursive Method
   function sayHi(n) {
       if (n == 0) {
           return
       }
       console.log('Hi,I am calling')
       sayHi(n - 1)
   }
   sayHi(10)

//...06...Recursion Sum
   function sum(n) {
       if (n == 1) {
           return 1
       }
       return n + sum(n - 1)
   }
   console.log(sum(5))

//...07...Recursion factoralization
   function fact(n) {
       if (n == 1) {
           return 1
       }
       return n * fact(n - 1)
   }
   console.log(fact(4))
*/
//...08...Recursion  of array
var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length - 1))