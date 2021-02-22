import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Faq extends React.Component{

    state = {
        faq: []
    }

    async componentDidMount(){
        const res = await axios.get("https://nepalcorona.info/api/v1/faqs");
        console.log(res);
        this.setState({
            faq: res.data.data
        })
    }

    render(){
        return(
            <>
            <div>
                                 <Link to = '/' className="nav-bar-link">
                                <h2>Home</h2>  
                                </Link>

             </div>
                <div>
                {this.state.faq.map(faqq =>
                    <div className = "myth">
                        <ul>
                        <li className="myth-head">{faqq.question} / {faqq.question_np}</li>
                        <br />
                         {faqq.answer}<br/>
                         {faqq.answer_np}
                        </ul> <hr />
                      
                    </div>   
                    
                    
                    )}

                </div>

            </>

        )
    }
}

