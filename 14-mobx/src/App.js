import React,{Component} from "react";
import Table from './Table'
import appStore from './Store'

class App extends Component{
    render(){
        return(
            <div>
                <h3>MobX Demo</h3>
                <Table store={appStore}/>
            </div>
        )
    }
} 

export default App
