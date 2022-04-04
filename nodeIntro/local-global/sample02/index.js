var slugify = require('slugify')


var result1 = slugify('Mern Stack Lessons')
console.log("Result 01 : " ,result1)

var mail = require('mail').Mail({
    host: 'korhan.tokgoz92@gmail.com'
    username: 'me@gmail.com'
    password: '**password**'
});