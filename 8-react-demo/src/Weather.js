import React, { Component } from 'react'

class Weather extends Component {
    state = {
        data: null,
        city: 'Delhi'
    }
    _getWeather() {
        var baseUrl = "https://api.openweathermap.org/data/2.5/weather"
        
        var apiKey = "1c23b09ccc4460920d6372291080820c"
        var url = `${baseUrl}?q=${this.state.city}&appid=${apiKey}`

        fetch(url)
        .then(res=>{
            res.json().then(data=>{
                this.setState({data})
            })
        })
    }
    render() {
        return (
            <span>
                <input type="text" value={this.state.city} onChange={e=>this.setState({city:e.target.value})}></input>
               <button onClick={()=>this._getWeather()}>Get Weather</button>
               {
                   this.state.data?
                   <div>{Math.round(this.state.data.main.temp-273.15)}°C
                   <br/>{this.state.data.weather[0].description}
                   <br />
                   <img src={'http://api.openweathermap.org/img/w/'+this.state.data.weather[0].icon+'.png'}/></div>
                   :null
               }
                
            </span>
        )
    }
}

export default Weather
