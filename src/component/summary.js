import React from 'react';
import Time from './time.js';
import axios from 'axios';
import Info from './info.js'
import World from './world.js';
import  ControlledCarousel from "./slider.js";


import {NavLink , Link} from 'react-router-dom';


class Summary extends React.Component{

state = {
    positive : '',
    death : '',
    recovered : '',
    totaltested : '',
    loading : true

}    


async componentDidMount(){
const res = await axios.get('https://nepalcorona.info/api/v1/data/nepal');

console.log(res);
 
this.setState({
    death : res.data.deaths,
    recovered : res.data.recovered,
    positive : res.data.tested_positive,
    totaltested: res.data.tested_total,
    loading : false
   

})


}



render(){

    // if(this.state.loading){
    //     return(
    //         <h2>loading.....</h2>
    //     )
    // }

    return(
        <>
            <div className= "nav-bar">
                <div>
                   
                <div>
                <NavLink to = '/' className="nav-bar-link">
                <h2>Home</h2>  
                </NavLink>
                
                </div>  
                </div>
                <div>
                <Link to = '/myths' className="nav-bar-link">
                <h2>Myths</h2>  
                </Link>
                
                </div>  

                <div>
                <Link to = '/hospital'className="nav-bar-link">
                <h2>Hospital Details </h2>  
                </Link>
                
                </div>  

                <div>
                <Link to = '/faq'className="nav-bar-link">
                <h2>Faq</h2>  
                </Link>
                
                </div>  
            </div> 

        <br />
        {/* <Time /> */}
        <br />
        
       

        
        {/* <div className = 'list'>
            <ul>
                <li>Total Positive Case : {this.state.positive}</li> 
                <li>Total Death Case : {this.state.death}</li>
                <li>Total Recovered Case : {this.state.recovered}</li>
                <li>Total Tested Case : {this.state.totaltested}</li>   
            </ul>
        </div> */}



        <div class = 'box-cointainer'>
            <div className="title">
                <h1>Corona virus Cases in Nepal</h1></div>
            
                <div class = 'box'>
                    <div className = "box1">
                        <h1>Total Positive Case:<br /> <br /><br />
                        {this.state.positive}</h1>
                    </div>
                </div> 


                <div class = 'box'>
                    <div class = 'box2'>
                        <h1>Total Death Case : <br />  <br /><br />
                        {this.state.death}</h1>
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
                        <h1>Total Tested Case : <br /> <br /><br />
                        {this.state.totaltested}</h1>
                    </div>
                </div>
               

        </div>
        <br/>

        <Info />
        <br />

        <World />
     
        <Time />


        {/* <ControlledCarousel /> */}
        

        
        

        

        

{/*         
             <div>
              <Link to = '/myths'>
              <h2>Myths</h2>  
              </Link>
            
            </div>  

            <div>
              <Link to = '/hospital'>
              <h2>hospital Details </h2>  
              </Link>
            
            </div>  

             <div>
              <Link to = '/faq'>
              <h2>Faq</h2>  
              </Link>
            
            </div>      */}
        </>
    )
}


}

export default Summary;