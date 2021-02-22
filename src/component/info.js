import React from 'react';
import ReactPlayer from 'react-player';


export default class Info extends React.Component{
    render(){
        return(

                        <>
            <div className= "info-coint">        
                <div className = "vid">
                    <h1>नोभल कोरोना भाइरसको खतरालाई कसरी कम गर्ने?</h1>
                    <ReactPlayer width='530px' height="260px" url="https://www.youtube.com/watch?v=-sExYoXmhF4#action=share"></ReactPlayer>
                </div>

                <div className = "news">
                    <h1>कोरोना भाइरस (कोभिड-१९)</h1> <br/> <br/>
                    <p>हाल विश्वभरी फैलिरहेका नयाँ कोरोना भाइरसको संक्रमणबाट लागेको रोगलाई विश्व स्वास्थ्य संगठनले “कोभिड १९” को नाम दिएको छ र यसलाई विश्वव्यापी महामारीको रुपमा घोषणा गरिसकिएको छ ।कोरोना भाइरस श्वाशप्रश्वाशको माध्यमबाट सर्ने रोग हो । यो संक्रमित व्यक्त्तिले खोक्दा वा हाछ्युँ गर्दा नाक वा मुखबाट निस्कने छिट्टाको माध्यमबाट एक व्यक्त्तिबाट अर्को व्यक्त्तिमा सर्दछ ।

                        यो नयाँ प्रजातिको भाइरस हो जुन मानव जातिमा पहिले पहिचान भएको थिएन। यस भाइरसले मानिस र पशुहरूमा संक्रमण गर्दछ। यस भाइरसले सामान्य रुघाखोकी देखि गम्भीर प्रकारको तीव्र श्वासप्रश्वास Severe Acute Respiratory Syndrome (SARS) सम्म गराउन सक्दछ ।
                    </p>
                </div>
            </div>    
            </>
        )

    }
}