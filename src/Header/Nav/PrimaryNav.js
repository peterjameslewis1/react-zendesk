import React from 'react';

const PrimaryNav = (props) => {

    // let dropDown = null;
    // dropDown = (
    //     DropDownData.map((data, index) => {
    //         return <DropDown data={data}/>
    //     })
    // )


   


    const navItems = ["Products", "Pricing", "Solutions", "Demo", "Services", "Recources", "Language"];
    let items = null;
    items = (
        navItems.map((item, index) => {
            
            return <li key={index}>{item}</li>
        })
    )


    return(
        <div className="primary-nav">
            <ul className="logo">
                <li className="logo-text"><img src="https://d1eipm3vz40hy0.cloudfront.net/images/navigation/header/zendesk-logo.svg" alt=""/></li>
            </ul>
            <ul className="nav-list-items">
                {items}
                
            
                <div className="user-cta">
                    <div className="get-started">Get Started</div>
                    <div className="sign-in">Sign in</div>
                </div>
            </ul>
        </div>
    )
}

export default PrimaryNav;