import React, { Component } from 'react'
import { render } from "react-dom";
import {Link} from 'react-router-dom'
import brace from "brace";
import AceEditor from "react-ace";
import Header from '../components/Header'
import M from 'materialize-css'

import firebase from "../scripts/fire";

import "brace/mode/javascript";
import "brace/theme/github";

var database = firebase.database();
  var Value = ''

class Editor extends Component {

    state = {
        code: '',
        mode: 'javascript'
    }
  onChange = (newValue) =>{ 
  
  database.ref("new value").set(newValue)
  database.ref("editorMode").set(this.state.mode)

 }
  

componentDidMount() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
    database.ref('new value').on('value',(snapshot)=>{
       let Value = snapshot.val();
        //  console.log(Value)
        this.setState({
            code: Value,
        })
        
      })
      database.ref('editorMode').on('value',(snapshot)=>{
        let mode = snapshot.val();
         this.setState({
             mode
         })
         
       })
    
}






    render() {
        return (
            <div>
                <Header myText='Live Editor'/>
                <br/>
                <button className="btn waves-effect waves-light grey lighten-2"><strong><Link to = '/'>Home </Link></strong></button>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>{this.state.mode}</a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li onClick={()=>this.setState({mode:'javascript'})}>Javascript</li>
                    <li onClick={()=>this.setState({
                        mode: 'python'
                    })}>Python</li>
                    <li onClick={()=>this.setState({
                        mode: 'c++'
                    })}>C++</li>

                    
                </ul>
                <br/>
                <br/>
                <AceEditor
                    mode={this.state.mode}
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    fontSize='18px'
                    editorProps={{ $blockScrolling: true }}
                    enableLiveAutocompletion = {true}
                    enableBasicAutocompletion = {true}
                    enableSnippets= {true}
                    value={this.state.code}
                    
                />
            </div>
        )
    }
}

export default Editor
