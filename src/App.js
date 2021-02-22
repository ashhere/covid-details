import React from 'react';
import Time from './component/time';
import Summary from './component/summary.js';
import Myths from './component/myths.js'
import Hospital from './component/hospital.js';
import Faq from './component/faq.js';
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';


export default class App extends React.Component{

render(){
    return(

        <>
        <div className="App">
        <Router>
           <Switch>
            
                                {/* <Route path = "/myths" component={Myths} />
                                <Route path = "/hospital" component={Hospital} />
                                <Route path = "/faq" component={Faq} />
                                <Route path = "/" component={Summary} /> */}


                                             {/* OR */}

                                <Route path = "/" exact component={Summary} />
                                <Route path = "/myths" component={Myths} />
                                <Route path = "/hospital" component={Hospital} />
                                <Route path = "/faq" component={Faq} />
                            
           
            {/* <Route path = "/" component={Time}  /> */}
            {/* <Time />
            <Summary /> */}
            {/* <Myths /> */}
            {/* <Hospital /> */}
            {/* <Faq />  */}

            </Switch>  
    
            </Router>
            
            

            {/* <Route exact path = "/Myths" component = {Myths} /> */}
            </div>
        </>
    )
}

}
