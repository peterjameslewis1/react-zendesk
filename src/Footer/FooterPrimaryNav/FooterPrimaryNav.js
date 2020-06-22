import React from 'react';
import NavBlock from './FooterPrimaryNavBlock';


const FooterPrimaryNav = (props) => {


    return (
        <div className="footer-container-nav">
            <div className="footer-container-nav__products block">
                <h3>Our Products</h3>
                <NavBlock data={props.products} />
            </div>
            <div className="footer-container-nav__features block">
                <h3>Top Features</h3>
                <NavBlock data={props.features} />
            </div>
            <div className="footer-container-nav__recources block">
                <h3>Recources</h3>
                <NavBlock data={props.recources} />
            </div>
            <div className="footer-container-nav__company block">
                <h3>Company</h3>
                <NavBlock data={props.company} />
            </div>
            <div className="footer-container-nav__favorite block">
                <h3>Favorite Things</h3>
                <NavBlock data={props.favorite} />
            </div>
        </div>
    )
}

export default FooterPrimaryNav;