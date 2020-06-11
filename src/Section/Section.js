import React from "react";

const Section = (props) => {

    return(
        <div className="section">
            <div className="section-container container">
                <div className="section-container__heading">
                    <h1>Things are changing fast.</h1>
                </div>
                <div className="section-container__subheading">
                    <h2>But you can be faster.</h2>
                </div>
                <div className="section-container__info">
                    <p>With Zendesk, it takes hours—not weeks—to get up and running. Our support, sales, and customer engagement software is quick to implement and easily scales to meet changing needs.</p>
                </div>
                <div className="section-container__cta">
                    <a href="#" className="trial-cta btn">Free trial</a>
                    <a href="#" className="demo-cta btn">View demo</a>
                </div>
                <div className="snail-img">
                    <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-home/promos/snail.png"/>
                </div>
            </div>
        </div>
    )
}

export default Section;