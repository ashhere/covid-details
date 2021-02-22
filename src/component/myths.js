import React from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Myths extends React.Component{

    state = {
        myth1 : [],
        
        loading : true
    }

    async componentDidMount(){
        const res = await axios.get('https://nepalcorona.info/api/v1/myths')
        console.log(res);

        this.setState({
            myth1 : res.data.data
        })

    }


    render(){

        return(
            <>

                    <div>
                                <Link to = '/' className="nav-bar-link">
                                <h2 >Home</h2>  
                                </Link>

                    </div>
            <div className = "myth">
                {this.state.myth1.map(data => 
                   <div>
                   <ul>
                       <li className="myth-head">Myth / गलत धारणा: <br /> {data.myth}</li> 
                       
                       <li className="myth-bottom">Reality  / वास्तविकता: <br />{data.reality}</li><br /> <hr/>

                       <br />

                       

                   </ul>
                   </div>


                )}
            </div>
            </>
        )
    }

}