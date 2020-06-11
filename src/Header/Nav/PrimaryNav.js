import React from 'react';
const PrimaryNav = () => {


    return(
        <div className="primary-nav">
            <ul className="logo">
                <li className="logo-text"><img src="https://d1eipm3vz40hy0.cloudfront.net/images/navigation/header/zendesk-logo.svg" alt="" class="responsive-img"/></li>
                <li className="mobile" style={{display: "none"}}>X</li>
            </ul>
            <ul className="nav-list-items">
                <li>Products</li>
                <li>Pricing</li>
                <li>Solutions</li>
                <li>Demo</li>
                <li>Services</li>
                <li>Recources</li>
                <li className="get-started">Get Started</li>
            </ul>
        </div>
    )
}

export default PrimaryNav;