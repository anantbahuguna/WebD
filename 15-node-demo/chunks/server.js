console.log('hello')

var https = require('https');
var fs = require('fs');

var request = https.request({
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/India',
    method: 'GET'
},function(res){
    var responseBody = '';
    res.setEncoding('UTF-8')
    res.once('data',function(chunk){
        console.log(chunk)
    })
    res.on('data',function(chunk){
        // console.log(chunk.length)
        responseBody+=chunk;
    })
    res.on('end',function(){
        console.log(responseBody.length)
        fs.writeFile('wiki.html',responseBody,function(err){
            if(err) {
                throw err;
            }
            else {
                console.log('file downloaded')
            };
        })
    })
    
})

request.end();




// process.stdin.on('data',function(data){
//     if(data.toString().trim() === 'exit') {
//         process.exit()
//     }
//     else {
//         process.stdout.write(data)
//     }

// })