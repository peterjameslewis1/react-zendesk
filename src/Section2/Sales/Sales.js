import React from 'react';

const Sales = () => {


    

    return (
        <div className="section-2-container__sales-info">
            <div className="section-2-container__sales-info-text">
            <div className="section-2-container__sales-info-text-container">
                <p className="section-2-container__sales-info-text-container__title">Sales</p>
                <h2>Win prospects over</h2>
                <p>Turn conversations into conversions. Our sales management tools are designed to enhance productivity and pipeline visibility for sales teams so they can focus on the prospect, not the process.</p>
                <a href="#">Learn more</a>
                <a href="#">Watch video</a>
            </div>
            <div className="section-2-container__sales-info-text-container" id="staples-content">
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-home/redesign-2019/logos/logo-staples.svg" />
                <p>“By giving our sales and support teams everything they need in one platform, they are able to effectively and efficiently collaborate and improve the customer experience.”</p>
                <p>- Simon Rodrigue, Senior Vice President and Chief Digital Officer</p>
            </div>
            </div>

            <div className="section-2-container__sales-info__img">
                <img className="section-2-container__sales-info__img-primary" src="https://d1eipm3vz40hy0.cloudfront.net/images/p-home/redesign-2019/use-cases/photo/use-case-sales-2x.jpg"/>
                <img className="section-2-container__sales-info__img-secondary-sales" src="https://d1eipm3vz40hy0.cloudfront.net/images/p-home/redesign-2019/use-cases/screenshot/screenshot-sales-2x.png"/>
            </div>
            
        </div> 
    )
}


export default Sales;