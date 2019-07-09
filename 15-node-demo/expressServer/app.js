var express = require('express')
var bodyParser = require('body-parser')
var app = express();


var users = [
    {
        id:1,
        name: 'Anne',
        age: 25
    },
    {
        id:2,
        name: 'Cathy',
        age: 21
    },
    {
        id:3,
        name: 'Bill',
        age: 40
    }
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static('./public'));


//to serve a file at a endpoint
app.get('/home',function(req,res){
    console.log(__dirname);
    res.sendFile('./public/index.html', {root: __dirname})
})

app.get('/users',function(req,res){
    res.json(users)
})

//query parameters
app.get('/users/sort',function(req,res){
    var key = req.query.key || 'id';
    var sortedList = users.sort(function(a,b){
        return (a[key] > b[key])? 1 : -1
    })
    res.json(sortedList)
})


//url parameters
app.get('/users/:id',function(req,res){
    var id = req.params.id;

    //finds 1st matched value and thus return single value
    var selectedUser = users.find(function(u,i){
        return String(u.id) === id
    })

    // var selectedUsers = users.filter(function(u,i){
    //     return String(u.id) === id
    // })
    if(selectedUser) {
        res.json(selectedUser)
    }
    else {
        res.status(404).send('user not found')
    }
    
})

//install body-parser for accessing req.body
app.post('/users',function(req,res){
    var newUser = req.body
    users.push(newUser)
    res.json(users)
})


app.listen(3000);
console.log('Express server running on 3000');

module.exports = app;