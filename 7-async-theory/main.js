function delay(seconds)
{
    return new Promise(resolve=>{
        setTimeout(resolve,1000*seconds)
    })
}

// delay(5).then(()=>console.log('hrgeg'))
// delay(2).then(()=>console.log('hrghghjgeg'))

// delay(1).then(()=>{
//     console.log('hello 1')
//     delay(3).then(()=>{
//         console.log('hello 2')
//         delay(2).then(()=>{
//             console.log('hello 3')
//         })
//     })
// })

function delay2(seconds)
{
    return new Promise((resolve,reject)=>{
        if(Math.random() < 0.5)
            setTimeout(()=>resolve('RESOLVED'),1000*seconds)
        else
            reject('CODING ERROR')
    })
}

//  delay2(3)
//     .then(msg=>console.log(msg))
//     .catch(err=>console.log(err))
// delay(2).then(()=>console.log('hrghghjgeg'))


var url ="https://jsonplaceholder.typicode.com/users"

// fetch(url).then(res=>{
//     res.json().then(data=>{
//     console.log(data)
// })})

// res =fetch(url)
// data = res.json()
// console.log(data)

// async function foo(){
//     res =await fetch(url)
//     data = await res.json()
//     console.log(data)
// }

// var foo =async ()=>{
//     res =await fetch(url)
//     data = await res.json()
//     console.log(data)
// }

// foo()

// var foo2 =async ()=>{
//     var urlPosts = "https://jsonplaceholder.typicode.com/posts"
//     var urlUsers = "https://jsonplaceholder.typicode.com/users"
    
//     res =await fetch(urlUsers)
//     userData = await res.json()
//     console.log(userData)

//     res =await fetch(urlPosts)
//     postsData = await res.json()
//     console.log(postsData)
// }

// foo2()

// var foo2 =async ()=>{
//     var urlPosts = "https://jsonplaceholder.typicode.com/posts"
//     var urlUsers = "https://jsonplaceholder.typicode.com/users"
    
//     userResPromise =fetch(urlUsers)
//     postResPromise =fetch(urlPosts)

//     userRes =await userResPromise
//     postRes =await postResPromise

//     userData = await userRes.json()
//     console.log(userData)

    
//     postsData = await postRes.json()
//     console.log(postsData)
// }

// foo2()

// var foo2 =async ()=>{
//     var urlPosts = "https://jsonplaceholder.typicode.com/posts"
//     var urlUsers = "https://jsonplaceholder.typicode.com/users"
    
//     userResPromise =delay(3)
//     postResPromise =delay(3)

//     userRes =await userResPromise
//     postRes =await postResPromise
//     console.log('completed')
// }

// foo2()

var foo2 =async ()=>{
    var urlPosts = "https://jsonplaceholder.typicode.com/posts"
    var urlUsers = "https://jsonplaceholder.typicode.com/users"
    
    userResPromise =delay(3)
    postResPromise =delay(3)

    responses = await Promise.all([userResPromise,postResPromise])
    
    console.log('completed')
}

foo2()