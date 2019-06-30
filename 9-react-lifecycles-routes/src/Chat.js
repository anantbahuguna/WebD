import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire from './scripts/fire.js'
import Header from './components/Header'
import LoginButton from './components/LoginButton'


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
            body: this.state.inputChat,
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
                
                            
                            <LoginButton showProfile={false} />
                            
                        
                
                <button >ADD USER</button>
                <br/>
                
                <div>

                    {this.state.msg.length!==1?
                        this.state.msg.map((message,i)=>{
                           return (
                               i!=0?
                               <div className="row " key = {i}>
                               <div className="col s12 m4 l4">
                                 <div className="card-panel teal">
                                   <span className="white-text">{message.body} - {message.author}
                                   </span>
                                 </div>
                               </div>
                             </div>:
                             <br key={i}/>
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
