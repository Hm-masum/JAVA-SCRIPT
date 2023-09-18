/*
//...01...Array declaration
    var arr = [1, 2, 3, 4, 5]
    arr[5] = 6
    arr[10] = 10
    console.log(arr)
    console.log(arr[4])
    console.log(arr[7])

    var arr2 = Array(1, 2, 3)
    console.log(arr2)
   
//...02...Array Length
    var arr = [1, 2, 3, 4, 5]
    arr[5] = 6
    arr[10] = 10
    console.log(arr.length)

//...03...Array Overriding
    var arr = [1, 2, 3, 4, 5]
    arr[5] = 6
    arr[10] = 10
    arr[2] = 22
    console.log(arr[2])

//...04...Array Traversing
    var arr = [2, 5, 1, 2, 3, 4, 5]

    for (var i = 0; i < arr.length; i++) {
        arr[i] += 2
        console.log(arr[i])
    }

//...05...Array Insert
    var arr = [2, 5, 1, 2, 3, 4, 5]    

    arr.push(9)           //insert element in the Last position 
    arr.unshift(0)        //insert element in the 1st position 
    console.log(arr)
    arr.splice(3, 0, 9)   //insert in the specific position(index,remove or not,value) 
    console.log(arr)

//...06...Array remove
    var arr = [2, 5, 1, 2, 3, 4, 5]

    arr.pop()              //remove Last element 
    console.log(arr)
    arr.shift()            //remove 1st element 
    console.log(arr)
    arr.splice(3, 1)       //remove specific element(index,remove or not,value) 
    console.log(arr)

//...07...Array search
    var arr = [2, 5, 1, 9, 3, 4, 7]
    var num = 10
    var cnt = false
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log('Data find at index ' + i)
            cnt = true
            break;
        }
    }
    if (!cnt) {
        console.log('Data not find ')
    }
    
//...08...2D array
    var arr = [
        [11, 22, 33, 44],
        [12, 23, 45, 67],
        [13, 24, 35, 46]
    ]
    console.log(arr[0][0])
    console.log(arr[0][1])
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log('Element ' + i     + ' : ' + arr[i][j])
        }
    }

//...09...Array reverse
    var arr = [11, 22, 33, 44]

    for (var i = 0; i < (arr.length / 2); i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr)
    console.log(arr.reverse())
*/
//...10...Array methods
var arr = [11, 22, 33, 44, 55, 66]
var arr1 = [12, 23, 34, 45, 56, 67]

console.log(arr.join(' ')) //join method
console.log(arr.join(','))

console.log(arr.fill(0))
console.log(arr.fill(true)) //fill method

var arr3 = arr.concat(arr1) //concat method
console.log(arr3)

console.log(Array.isArray(arr1)) //is array method

var a = [1, 2]
var b = Array.from(a) //Duplicate array
console.log(b)