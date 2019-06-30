import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LoginButton from '../components/LoginButton'
import Header from '../components/Header'
import M from 'materialize-css'
class Home extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});
    }
  
    render() {
        return (
            <div>
                <Header myText='Home'/>
                <div style={{textAlign: 'center'}}>
                    
                    <h1>Home Page</h1>
                    


                    <div className="row">
                         <div className="col s12 m6 l6">
                        <div className="card-panel blue-grey">
                            <span className="white-text">
                            <LoginButton showProfile={true} />
                            <br/>
                            </span>
                        </div>
                        </div>

                        <div className="col s12 m4 l3">
                            <div className="card-panel blue-grey">
                                <span className="white-text">
                                    <button className="btn waves-effect waves-light grey lighten-3"><strong><Link to = '/profile'>Profile </Link></strong></button>
                                    <br/><br/>
                                    <button className="btn waves-effect waves-light grey lighten-3"><strong><Link to = '/weather'>Weather </Link></strong></button>
                                    <br/><br/>
                                    <button className="btn waves-effect waves-light grey lighten-3"><strong><Link to = '/chat'>Chat App </Link></strong></button>
                                    <br/><br/>
                                    <button className="btn waves-effect waves-light grey lighten-3"><strong><Link to = '/editor'>Editor </Link></strong></button>
                                    
                                    <br/><br/>
                                    
                                </span>
                            </div>
                        </div>
                        
                    </div>
                   
                    <a className="waves-effect waves-light btn modal-trigger indigo darken-1" href="#modal1">Modal</a>

                   
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                        </div>
                        <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>

                    <i className="material-icons btn-floating btn-large waves-effect waves-light red">+</i>
            
                    
        
                    <br/>

                    
                </div>
            </div>
        )
    }
}

export default Home
