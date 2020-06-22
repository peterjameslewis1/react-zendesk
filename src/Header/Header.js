import React, { useState } from 'react';
import PrimaryNav from './Nav/PrimaryNav';
import SecondaryNav from './Nav/SecondaryNav';






const Header = () => {
const [active, setActive] = useState(false)

const dropDown = () => {
    setActive(!active)
}
   
    return(
        <div className="sticky-inner header">
            <div className={ active ? 'active' : 'header-container'}>
                <SecondaryNav />
                <PrimaryNav state={active}/>
                <li onClick={dropDown} className="mobile"><i class="fa fa-bars" aria-hidden="true"></i>
                </li>
            </div>
        </div>
    )
}

export default Header;