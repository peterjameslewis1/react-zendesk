import React from 'react';


const Section4 = () => {



    return (
        <div className="section-4">
            <div className="section-4-container container">
                <div className="section-4-container__video">
                

                    <video preload="auto" autoPlay="autoplay" loop="loop" id="bgvid">
                        <source src="https://web-assets.zendesk.com/images/p-home/redesign-2019/video-background-platform.mp4" type="video/mp4"></source>
                    </video>

                </div>
                


                <div className="section-4-container__text">
                    <div className="section-4-container__text-title">
                    <span><i className="fas fa-sun"></i></span>
                    <h3 className="logo">sunshine</h3>
                    </div>
                    <div className="section-4-container__text-content">
                    <h2>Build with, on, and beyond</h2>
                    <p>Build your own solution with Zendesk Sunshine, the open and flexible CRM platform. Sunshine is built on AWS and lets you seamlessly connect and understand all your customer data—wherever it lives. It’s fast, agile, and powerful enough to customize for a changing world.</p>
                    </div>
                    <div className="section-4-container__text-cta">
                        <a href="#" className="btn-blue">Learn more</a>
                        <a href="#" className="btn-blue"><i class="fas fa-play" aria-hidden="true"></i>Watch more</a>
                    </div>
                    
               
                </div>
            </div>
        </div>
    )
}



export default Section4;