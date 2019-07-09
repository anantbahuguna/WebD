import React, { Component } from 'react'
import { render } from "react-dom";

import brace from "brace";
import AceEditor from "react-ace";
import Header from '../components/Header'
import M from 'materialize-css'

import fire from "../scripts/fire";

import "brace/mode/javascript";
import "brace/mode/python";

import "brace/theme/github";
import "brace/theme/monokai";



class MyEditor extends Component {

    
    state = {
        code: '',
        mode: 'javascript'
    }
  onChange = (newValue) =>{ 
  
  fire.database().ref("new value").set(newValue)
  fire.database().ref("editorMode").set(this.state.mode)

 }
  

componentDidMount() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
    fire.database().ref('new value').on('value',(snapshot)=>{
       let Value = snapshot.val();
        //  console.log(Value)
        this.setState({
            code: Value,
        })
        
      })
      fire.database().ref('editorMode').on('value',(snapshot)=>{
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

export default MyEditor
