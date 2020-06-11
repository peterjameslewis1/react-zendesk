import React from 'react';
import PrimaryNav from './Nav/PrimaryNav';
import SecondaryNav from './Nav/SecondaryNav';



const Header = () => {

    return(
        <div className="header">
            <div className="header-container">
            <SecondaryNav />
            <PrimaryNav />
            </div>
        </div>
    )
}

export default Header;