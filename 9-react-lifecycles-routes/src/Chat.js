import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire from './scripts/fire.js'
import Header from './components/Header'


class Chat extends Component {

    state = {
        msg: [
            {
                author:'',
                body: ''
            }
           
        ],
        inputChat: ''
        
    }

    componentDidMount() {
        fire.database().ref('messages').on('child_added',(snapshot)=>{
            
            let message = this.state.msg
            message.push(snapshot.val())
            this.setState({
                msg: message
            })
            
            
        }
    )
 }
    
//     componentDidMount() {
//         fire.database().ref('messages').on('child_added',(snapshot)=>{
//             snapshot.forEach(childSnapshot=>{
            
//             console.log(childSnapshot.val())
//             this.setState({
//                 msg: {
//                     author: childSnapshot.val().author,
//                     body: childSnapshot.val().body
//                 }
//             })
            
            
//         })
//     })
//  }

   

    // _getMessages() {

    //     fire.database().ref('messages').once('value',function(snapshot) {
    //         snapshot.forEach(function(childSnapshot){
    //             console.log(childSnapshot.key)
    //             console.log(childSnapshot.val())
                
    //         })
    //     })
    //     // fire.database().ref('messages').on('child_added',snapshot=>{
    //     //     var msg = snapshot.val();
    //     //     console.log(msg);
    //     //     console.log('hello')
    //     //     // msg[0].map(v=>console.log(v))

    //     //      this.setState({msg})
            
    //     // })
    //  }

    // foo(abc) {
    //     this.setState({msg: abc})
    // }
    // _addUser() {
    //     fire.database().ref('users').push().set({
    //                 name: 'Coding',
    //                 age: 19
    //             })
    // }
    _send() {
        fire.database().ref('messages').push().set({
            body: this.state.msg.inputChat,
            author: 'coding'
        })
    }
    // openChat() {
    //     const database = fire.database();
    //     // this._getMessages();
    //     var data
    //     fire.database().ref('messages').once('value',function(snapshot) {
    //         snapshot.forEach(function(childSnapshot){
    //             console.log(childSnapshot.key)
    //             console.log(childSnapshot.val())
    //            data = childSnapshot.val()
                
    //         })
    //         console.log(data)
            
    //     })
    //     this.setState({msg:data})
    //     // return(
    //     //     <div>
    //     //         {this.state.msg.body}   - <strong>{this.state.msg.author}</strong>
    //     //     </div>
    //     // )
    // }
    render() {
        return (
            <div >
                <Header myText='CHAT APP'/>
                <br/>
                <button className="btn waves-effect waves-light grey lighten-2"><strong><Link to = '/'>Home </Link></strong></button>
                <br/><br/>
                <button >ADD USER</button>
                <br/>
                
                <div>

                    {this.state.msg.length!==1?
                        this.state.msg.map((message,i)=>{
                           return (
                               <div key = {i}>
                                   {message.body} - {message.author}
                               </div>
                           )
                        })
                        :
                        <br/>
                    }
                    
                   {
                    //    this.state.msg.body?
                        
                    //             <div>
                    //                 {this.state.msg.body}   - <strong>{this.state.msg.author}</strong>
                    //             </div>
                    //      :this.state.msg.body?
                        
                    //             <div>
                    //                 {this.state.msg.body}   - <strong>{this.state.msg.author}</strong>
                    //             </div>
                    //      :
                    //     <div>fa</div>
                    //     <div>fa</div>
                   }
                </div>
                
                <br/>
                <input id="inputBox" onChange={e=>this.setState({
                    inputChat: e.target.value
                })}/>
                <button onClick={()=>this._send()}>SEND</button>
            </div>
        )
    }
}

export default Chat
