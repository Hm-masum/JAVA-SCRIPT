/*
//...01...MATH FUNCTION
    console.log(Math.E)
    console.log(Math.PI)

    console.log(Math.abs(-4.589))
    console.log(Math.floor(4.589))
    console.log(Math.ceil(4.589))
    console.log(Math.round(4.589))

    console.log(Math.max(444, 555))
    console.log(Math.min(444, 555))
    console.log(Math.max(444, 555, 666))
    console.log(Math.min(444, 555, 666))

    console.log(Math.pow(2, 3))

    console.log(Math.sqrt(9))
    console.log(Math.sqrt(16))

    console.log(Math.random())
    console.log(Math.round(Math.random() * 50 + 1))    

//...02...Date & Time 
    var date = new Date()
    console.log(date)

    console.log(date.toDateString())
    console.log(date.toTimeString())
    console.log(date.toLocaleString())

    console.log(date.getFullYear())
    console.log(date.getDate())
    console.log(date.getMonth())
    console.log(date.getDay())
    console.log(date.getHours())

//...03...Logic and condition
    var a = 10,
        b = 10;
    if (a > b) {
        console.log(a + ' is big')
    } else if (a == b) {
        console.log("They are equal")
    } else {
        console.log(b + ' is big')
    }

//...04...Switch condition
    var date = new Date();
    var today = date.getDay()
    switch (today) {
        case 0:
            console.log('Today is sunday')
            break;
        case 1:
            console.log('Today is Monday')
            break;
        case 2:
            console.log('Today is Thusday')
            break;
        case 3:
            console.log('Today is wednesday')
            break;
        case 4:
            console.log('Today is Tharsday')
            break;
        case 5:
            console.log('Today is friday')
            break;
        case 6:
            console.log('Today is saterday')
            break;
        default:
            console.log('Not a valid number')
    }

//...05...Logical condition
    var a = 10;
    var b = 15;
    var c = 30;
    var d = 40;
    if (a > b && c > d) {
        console.log('a & b big')
    } else if (a > b && c < d) {
        console.log('a & d big')
    } else if (a < b && c < d) {
        console.log('b & d big')
    }

//...06... Ternary operator
    var n = 10;
    var str = '';

    if (n % 2 == 0) {
        str = 'Even'
    } else {
        str = 'Odd'
    }
    console.log(str)

    var result = 13 % 2 == 0 ? 'Even' : 'Odd'
    console.log(result)

//...07... And or Shorthand
    var name = '';
    var fullname = name || 'HM Masum'
    console.log(fullname)

    var name = 'fishan';
    var fullname = name || 'HM Masum'
    console.log(fullname)

    var isOK = true
    isOK && console.log("Every thing is ok")
    var isOK = false
    isOK && console.log("Every thing is ok")

//...08...For Loop
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        console.log("HM masum")
        sum += i;
    }
    console.log(sum);

//...09...While Loop

    var i = 1;
    while (i < 5) {
        console.log('HM Masum');
        i++;
    }
    
    var isRunning = true;
    while (isRunning) {
        var rand = Math.floor(Math.random() * 10 + 1)
        if (rand == 9) {
            console.log("win")
            isRunning = false;
        } else {
            console.log("not win" + rand)
        }
    }
        
//...10...Do While Loop
    var isRunning = false
    do {
        console.log("I love you")
    }
    while (isRunning) {
    
    }

//...11...Nested Loop
    for (var i = 1; i <= 5; i++) {
        var result = ''
        for (var j = 1; j <= i; j++) {
            result += j + ' '
        }
        console.log(result)
    }
*/
//...12...Infinity for loop
    for (;;) {
        var rand = Math.floor(Math.random() * 10 + 1)
        if (rand == 9) {
            console.log("win")
            break;    
        } else {
            console.log("not win" + rand)
        }
    }
