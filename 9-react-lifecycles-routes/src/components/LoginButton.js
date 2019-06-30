import React, { Component } from 'react'

import fire from '../scripts/fire'
import firebase from 'firebase'
class LoginButton extends Component {
    state = {
        isLoggedIn: false,
        user: null
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user=> {
            if (user) {
              // User is signed in.
              
              this.setState({
                  isLoggedIn: true,
                  user
              })
            } else {
              // No user is signed in.
              this.setState({
                  isLoggedIn: false,
                  user:null
              })
            }
          });
          
    }
    _signIn() {
        var provider = new firebase.auth.GoogleAuthProvider();

        fire.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('signed in')
          }).catch(function(error) {
              console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }
    _signOut() {
        fire.auth().signOut().then(function() {
            // Sign-out successful.
            console.log('signed out')
          }).catch(function(error) {
            // An error happened.
            console.log('could not sign out')
          });
          
    }
    render() {
        var {showProfile} = this.props
        return (
            <div>
                
                {
                    this.state.isLoggedIn?
                    <button className="btn waves-effect waves-light" onClick={()=>this._signOut()}>Sign Out</button>
                    :<button className="btn waves-effect waves-light" onClick={()=>this._signIn()}>Sign In</button>
                    
                }
                <br/><br></br>
                {
                    this.state.user && showProfile?
                    <div className='flow-text'>
                        <img src={this.state.user.photoURL}width={80} height={80} style={{borderRadius:'50%'}}></img>
                        <h4 style={{fontSize:'2rem'}}>{this.state.user.displayName}</h4>
                        <h4 style={{fontSize:'2rem'}}>{this.state.user.email}</h4>
                        
                    </div>:
                    <div>..</div>
                }
                
                
            </div>
        )
    }
}

export default LoginButton
