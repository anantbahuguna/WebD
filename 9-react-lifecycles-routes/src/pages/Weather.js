import React, { Component } from 'react'
import Header from '../components/Header'

var URL,baseUrl,apiKey
class Weather extends Component {

    constructor(props) {
        super(props)
        // console.log('constructor')
        URL = '';
        
        this.state = {
            data: null,
            city: 'Delhi'
        }
    }

    _getUrl() {
        baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        apiKey = "1c23b09ccc4460920d6372291080820c"
        var city = this.state.city
        
        var url = ''
        if(!URL)
        {
            url = `${baseUrl}?q=${city}&appid=${apiKey}`
        }
        else
        {
            url = URL
        }
        return url
    }
    
    _getWeather(url) {
       
        if(!url)
        {
            url= this._getUrl()
        }
        else
        {

        }
       
       

        fetch(url)
        .then(res=>{
            res.json().then(data=>{
                this.setState({data})
            })
        })
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log('Geolocation permissions granted');
        //     console.log('Latitude:' + position.coords.latitude);
        //     console.log('Longitude:' + position.coords.longitude);
            
        //   });

        //   if(navigator.geolocation)
        //   {
        //       navigator.geolocation.getCurrentPosition(loc => {console.log(loc)})
        //   }
      
          
    }

    componentDidMount() {
        // console.log('component did mount')
        if(navigator.geolocation)
          {
            navigator.geolocation.getCurrentPosition(loc => {
                
                let lat = loc.coords.latitude
                let lon = loc.coords.longitude
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c23b09ccc4460920d6372291080820c`
                this._getWeather(url)
            })
            
            
            //   navigator.geolocation.getCurrentPosition(loc => {console.log(loc)})
          }
          else
          {
            this._getWeather();
          }
        
    }
    // componentDidUpdate() {
    //     console.log('Component did update')
    // }

    render() {

        // console.log('rendering....')
        return (
            <div>
                <Header myText='Weather'/>
                <br/>
                <input type="text" value={this.state.city} onChange={e=>this.setState({city:e.target.value})}></input>
               <button onClick={()=>this._getWeather()}>Get Weather</button>
               {
                   this.state.data?
                   <div>{Math.round(this.state.data.main.temp-273.15)}°C
                   <br/>{this.state.data.weather[0].description}
                   <br />
                   <img src={'http://api.openweathermap.org/img/w/'+this.state.data.weather[0].icon+'.png'} alt='weather'/></div>
                   :null
               }
                
            </div>
        )
    }
}

export default Weather
