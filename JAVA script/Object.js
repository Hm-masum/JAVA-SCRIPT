/*
//...01...Object basic
    var obj = {}

    console.log(obj)
    console.log(typeof obj)

    obj.x = 10
    console.log(obj)
    console.log(typeof obj)

    var point = {
        x: 10,
        y: 20
    }
    console.log(point)

//...02...Obj constractor
    var obj = Object()
    obj.a = 11
    console.log(obj)

//...03...insert and replace
    var point = {
        x: 10,
        y: 20
    }
    point.z = 40               //insert
    point.y = 30               //replace
    console.log(point)

//...04...Access obj properties
    var point = {
        x: 10,
        y: 20,
        z: 30
    }

    console.log(point.y)           //dot notation
    console.log(point.y + point.z)
    console.log(point['x'])        //array notation

    var show = 'z'
    console.log(point['z'])

//...05...update using array notation
    var point = {
        x: 10,
        y: 20,
        z: 30
    }

    console.log(point.d)
    point['y'] = 100
    var prop = 'z'
    point[prop] = 55
    console.log(point)

//...06...Remove object properties
    var point = {
        x: 10,
        y: 20,
        z: 30
    }
    point.z = undefined
    console.log(point)

    delete point.z
    console.log(point)

//...07...object Compare
    var obj1 = {
        x: 10,
        y: 20,
    }
    var obj2 = {
        x: 10,
        y: 20,
    }

    console.log(obj1 == obj2)

    if (obj1.x == obj2.x && obj1.y == obj2.y) {
        console.log(true)
    } else {
        console.log(false)
    }

    console.log(obj1)
    console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

//...08...Object iterate
    var obj = {
        x: 10,
        y: 20,
        z: 30
    }
    console.log('x' in obj)
    console.log('a' in obj)

//...09...Object Traversing  using For in Loop  
    var obj = {
        x: 10,
        y: 20,
        z: 30
    }
    for (var i in obj) {
        console.log(i)
        console.log(obj[i])
    }
*/
//...10...Object Method  
var obj = {
    x: 10,
    y: 20,
    z: 30
}
console.log(Object.keys(obj)) //keys method

console.log(Object.values(obj)) //value method

console.log(Object.entries(obj)) //entries method

var obj2 = Object.assign({}, obj) //Assign method
console.log(obj2)