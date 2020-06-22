import React from "react";
import TriplePromo from './TriplePromo/TriplePromo.js';
import './Section1.less';

const Section = (props) => {

    return(
        <div className="section-1">
            <div className="section-1-container container">
                <div className="laptop-img">
                    <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-home/promos/promo-laptop.png" alt=""/>
                </div>
                
                <div className="section-1-container__subheading">
                    <h2>Powerful solutions <br/> for new challenges</h2>
                </div>
                <div className="section-1-container__info">
                    <p>The world feels heavy right now. <br/>
                    To lighten the load, we put together extra resources to help.</p>
                </div>
                <TriplePromo />
            </div>
        </div>
    )
}

export default Section;