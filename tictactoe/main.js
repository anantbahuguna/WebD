var player = "X"
var btns = document.querySelectorAll("button")

btns.forEach(function(btn){
    btn.addEventListener('click',handleClick)
})

function handleClick(e)
{
    console.log(e.target.id)
    if(e.target.innerText ==='+')
   {
     e.target.innerText = player;
     if(player === "X")
        player = "O"
     else
        player = "X"
    calcScore()
    }
}

// var player = "X"
// function handleClick(btnNo) {
//     var btn=document.getElementById(btnNo)
//     if(btn.innerText ==='+')
//     {
//      btn.innerText = player;
//      if(player === "X")
//         player = "O"
//      else
//         player = "X"

//     calcScore()
//     }
        
// }

function calcScore()
{
    var b1 = document.getElementById('b1').innerText;
    var b2 = document.getElementById('b2').innerText;
    var b3 = document.getElementById('b3').innerText;
    var b4 = document.getElementById('b4').innerText;
    var b5 = document.getElementById('b5').innerText;
    var b6 = document.getElementById('b6').innerText;
    var b7 = document.getElementById('b7').innerText;
    var b8 = document.getElementById('b8').innerText;
    var b9 = document.getElementById('b9').innerText;


    if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
    else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
    else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)    
        else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
        else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
        else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
        else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
        else if(b1===b2 && b2==b3 && b1!=='+')
        alert(b1)
}






/*const btns = document.querySelectorAll('button')
const players = ['X', 'O']
let i=0,j=0;

btns.forEach(function(btn){

    btn.addEventListener('click', (e)=>{
        let ID = e.target.id ;
        ID = document.querySelector('#'+ID);
    
        console.log(ID.innerText)
       if(ID.innerText == "+")
        {
            ID.innerText=players[i]
            i = Math.abs(i-1)
            j+=1
        }
    })

}

)
*/