import React, { useState, useEffect } from "react";
import Support from './Support/Support';
import Sales from './Sales/Sales';
import './Section2.less';



const Section = (props) => {
    const [showSupport, setShowSupport] = useState(true);
    const [showSales, setShowSales] = useState(false);
    


   const showComponentHandler = (name) => {
        if(name === 'support'){
            setShowSupport(!showSupport)
            setShowSales(!showSales)
        }
        else if (name === 'sales') {
            setShowSupport(!showSupport)
            setShowSales(!showSales)
        }
    }

        
    

    return(
        <div className="section-2">
            <div className="section-2-container container">
                <div className="section-2-container__heading">
                    <h2>Connect with speed and flexibility</h2>
                </div>

                <div className="section-2-container__toggle">
                    <div onClick={() => showComponentHandler('support')} className="section-2-container__toggle-support">Support</div>
                    <div onClick={() => showComponentHandler('sales')} className="section-2-container__toggle-sales">Sales</div>
                </div>
                { showSupport && <Support />}
                { showSales && <Sales />}
                { window.innerWidth < 800 ? <Sales /> : '' }
                </div>
        </div>
    )
}

export default Section;