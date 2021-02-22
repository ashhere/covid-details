import React from 'react';
import Tab from "./hosptable.js";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Hospital extends React.Component{

    state = {
        hosp: []
    }

    async componentDidMount(){
        const res = await axios.get("https://nepalcorona.info/api/v1/hospitals");
        console.log(res);
        this.setState({
            hosp: res.data.data
        })
    }

    render(){
        return(
            <>
                <div className= "hosp">
                    <div>
                                <Link to = '/' className="nav-bar-link">
                                <h2>Home</h2>  
                                </Link>

                    </div>
               
                    
                    
                    


                <h1>कोभिड-१९ का लागी स्वास्थ्य संस्थाहरु</h1>
                <Tab />
                </div>




            </>

        )
    }
}