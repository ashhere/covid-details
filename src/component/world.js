import React from 'react';
import axios from 'axios';


export default class World extends React.Component{

state = {
    positive : '',
    deaths : '',
    recovered: '',
    active : ''

}

async componentDidMount(){
const res = await axios.get("https://data.nepalcorona.info/api/v1/world");

this.setState({
    positive : res.data.cases,
    deaths : res.data.deaths,
    recovered : res.data.recovered,
    active : res.data.active

})

}


    render(){
        return(

            <>
            <div class = 'box-cointainer'>
            <div className="title">
                <h1>Corona virus Cases in World</h1></div>
            
                <div class = 'box'>
                    <div className = "box1">
                        <h1>Total Positive Case : <br /> <br /><br />
                        {this.state.positive}</h1>
                    </div>
                </div> 


                <div class = 'box'>
                    <div class = 'box2'>
                        <h1>Total Death Case : <br />  <br /><br />
                        {this.state.deaths}</h1>
                    </div>
                </div>

                <div class = 'box'>
                    <div class = 'box3'>
                        <h1>Total Recovered Case : <br /> <br />
                        {this.state.recovered}</h1>
                    </div>
                </div>

                <div class = 'box'>
                    <div class = 'box4'>
                        <h1>Total Active Case : <br /> <br /><br />
                        {this.state.active}</h1>
                    </div>
                </div>

              
               

        </div>
            </>
        )
    }

}