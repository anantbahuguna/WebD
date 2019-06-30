import React, { Component } from 'react'
import { render } from "react-dom";
import brace from "brace";
import AceEditor from "react-ace";

import firebase from "../scripts/fire";

import "brace/mode/javascript";
import "brace/theme/github";

var database = firebase.database();
  var Value = ''

class MyEditor extends Component {

    state = {
        code: ''
    }

    valueSet(x)
    {
        this.setState({
            Value: x
        })
    }

  onChange(newValue) {

   
  
  database.ref("new value").set(newValue)

  
    
  }
  

componentDidMount() {
    database.ref('new value').on('value',(snapshot)=>{
       let Value = snapshot.val();
        //  console.log(Value)
        this.setState({
            code: Value
        })
        
      })
    
}






    render() {
        return (
            <div>
                <AceEditor
                    mode="javascript"
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
