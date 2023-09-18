/*
//...01...Basic String
    var str = 'kasfi'
    var str1 = String('fawjia')
    console.log(str1);

    var n = 10
    var str1 = n + ''
    var str2 = n.toString()
    console.log(str1);
    console.log(str2);
    var str3 = String(n)
    console.log(str3);

//...02...Escap Notation
    var str = "samira 'fawzia'"
    console.log(str)

    var str = 'samira \'fawzia \''
    console.log(str)
    var str = 'samira \nfawzia '
    console.log(str)
    var str = 'samira \tfawzia '
    console.log(str)
    var str = 'samira \\    fawzia '
    console.log(str)

//...3...String Comparison

   var a = 'Masum'
   var b = 'Hafiz'

    console.log(a == b)
    console.log('001' == 1)

//...4...String Metods

    var a = 'Masum'
    var b = 'Hafiz'

    var c = a.concat(' ', b)           //concatnation
    console.log(c)

    var d = c.substr(4, 5)               //Substring
    console.log(d)

    console.log(c.charAt(4))             //knowing fixed idex string

    console.log(c.startsWith('Mas'))     //Start hoise kina
    console.log(c.endsWith('Hafiz'))     //end hoise kina

    console.log(a.toUpperCase())         //convert upper
    console.log(b.toLowerCase())         //convert lower

    console.log('    masum   '.trim())   //Remove space from 1st & last

    console.log(c.split(' '))            //convert string to array
*/
//...5...String Length
var str = 'Some string'
var len = 0;
while (true) {
    if (str.charAt(len) == '') {
        break;
    } else {
        len++;
    }
}
console.log(len)
console.log(str.length)