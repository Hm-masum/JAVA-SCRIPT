 /*
 //...01...basic
     console.log("my fav num" + "34")
     console.log("11" + "34")
     console.log("11" + "34")

 //...02...Variable
     var name = "HM Masum"
     var age = 21;
     console.log(name)
     console.log(age)
     console.log(name + " knows the js")

 //...03...convert float and int to a string
 //====>Data type{ primitive(number,string,boolean) & objective(array,object,function)}
     var n = 1456;
     var f = 3.1416;
     var num = Number('45.45')
     console.log(num)
     console.log(Number.parseFloat(num))
     console.log(Number.parseInt(num))

 //...04...MAX & MIN safe value
     console.log(Number.MAX_VALUE)
     console.log(Number.MIN_SAFE_INTEGER)

 //...05...Basic num
     console.log(1 / 0)
     console.log('abc' * 10)

 //...06...Dicleration
     var str = 'string'
     var str1 = "string"
     var str2 = `string`

     var str3 = String('string')
     var str4 = String(156)
     var str5 = String(3.1416)
     console.log(str3, str4, str5)

 //...07...Boolean
     var b1 = true
     var b2 = false

     var b3 = Boolean(true)
     var b4 = Boolean(false)
     console.log(b3, b4)

 //...08...Undefined and null
     var abc
     var xyz = null;

     console.log(abc, xyz)

 //...09...TYPE conversion
     var str = '1000'
     var n = 10

     console.log(str + n)
     console.log(Number(str) + n)              //str to int
     console.log(Number.parseInt(str) + n)     //or str to int
     console.log(n.toString())                 //int to str 
     console.log(String(Infinity))
     console.log(Boolean(Infinity))
     console.log(Boolean(''))
     console.log(Boolean('jdj'))
     var x = true
     console.log(x.toString())

 //...10...Octal and Hexadecimal
     var hex = 0xff                 //hexa code = 0x
     console.log(hex)

     var oct = 0756                 //octal code = 0    
     console.log(oct)

 //...11...Arithmetic Operator
     var a = 10,
         b = 3;
     console.log(a % b)
     console.log(++a)       //pre-increment
     console.log(a++)       //post-increment
     console.log(a)

     console.log(--a)      //pre-decrement
     console.log(a--)      //post-decrement
     console.log(a)

 //...12...Asignment Operator
     var a = 10,
         b = 3;
     a += b
     console.log(a)
     a -= b
     console.log(a)
     a *= b
     console.log(a)
     a /= b
     console.log(a)
     a %= b
     console.log(a)

 //...13...Comparison Operator
     var a = 10,
         b = 30;
     console.log(a == b)
     console.log(a != b)
     console.log(a > b)
     console.log(a < b)
     console.log(a >= b)
     console.log(a <= b)

     var c = '50'
     var d = 50
     console.log(c == d)
     console.log(c === d)      //check with data type
     console.log(c !== d)
 */
 //...14...typeof Operator
 console.log(typeof(12))
 console.log(typeof 'masum')