
var database = firebase.database();

function send()
{
    var inputBox = document.getElementById('inputBox');
    var msg = inputBox.value
    database.ref('messages').push().set({
        body: msg,
        author: 'coding'
    })
    inputBox.value = ''
}

var chatBox = document.getElementById('chatBox');

database.ref('messages').on('child_added',function(snapshot){
    var msg = snapshot.val()
    chatBox.innerHTML += `<em><p>${msg.body} - by 
    ${msg.author}</p></em>`
})

// function addUser()
// {
//     database.ref('users').push().set({
//         name: 'Coding',
//         age: 19
//     })
// }


// database.ref('users').on('child_added',function(snapshot){

//     console.log(snapshot.val())

// })