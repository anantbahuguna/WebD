import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import fire from '../scripts/fire.js'

class Profile extends Component {
    
    state = {
        userName: ''
    }
    componentDidMount(){

       
        // var database = fire.database();
        var id = this.props.match.params.id

        fire.database().ref("users/" + id).once("value").then(snapshot  => {
            var user = snapshot.val().name;
            
            console.log(user)
            this.setState({userName: user})
        })
        .catch(()=>console.log('Could not find user'))
    }
    render() {
        var id = this.props.match.params.id
        
        return (
            <div>
                <h1>Profile {id}</h1>
                
                <h1>{this.state.userName}</h1>
                
                <Link to='/'>Home</Link>
            </div>
        )
    }
}

export default Profile
