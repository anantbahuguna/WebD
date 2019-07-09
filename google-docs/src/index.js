import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'


// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import { render } from "react-dom";
// import brace from "brace";
// import AceEditor from "react-ace";

// import firebase from "./fire";

// import "brace/mode/java";
// import "brace/theme/github";

// var database = firebase.database();
// var Value = ''

// function onChange(newValue) {

//   // console.log("change", newValue);
  
//   database.ref("new value").set(newValue)

  
// }
// database.ref('new value').once('value',function(snapshot){
//   Value = snapshot.val();
//   console.log(Value)
// })


// database.ref('new value').on('value',function(snapshot){
//   Value = snapshot.val();
//   // console.log(Value)
// })



// // Render editor
// render(
//   <AceEditor
//     mode="javascript"
//     theme="github"
//     onChange={onChange}
//     name="UNIQUE_ID_OF_DIV"
//     fontSize='18px'
//     editorProps={{ $blockScrolling: true }}
//     enableLiveAutocompletion = {true}
//     enableBasicAutocompletion = {true}
//     enableSnippets= {true}
//     defaultValue = ''
//     value = {Value}
//   />,
//   document.getElementById("root")
// );
