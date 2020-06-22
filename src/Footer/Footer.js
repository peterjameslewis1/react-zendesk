import React from 'react';
import FooterProducts from './FooterProducts.json';
import FooterFeatures from './FooterFeatures.json';
import FooterRecources from './FooterRecources.json';
import FooterCompany from './FooterCompany.json';
import FooterFavorite from './FooterFavorite.json';

import FooterPrimaryNav from './FooterPrimaryNav/FooterPrimaryNav'
import FooterNewsletter from './FooterSecondaryNav/FooterNewsletter';
import FooterSocial from './FooterSecondaryNav/FooterSocial';
import FooterLegal from  './FooterSecondaryNav/FooterLegal';


const Footer = (props) => {

const productData = FooterProducts;
let products = null;
products = (
    productData.map((data, index) => {
    return <p><span>{data.text}</span></p>
    })
)

const featuresData = FooterFeatures;
let features = null;
features = (
    featuresData.map((data, index) => {
        return <p><span>{data.text}</span></p>
    })
)

const recourceData = FooterRecources;
let recources = null;
recources = (
    recourceData.map((data, index) => {
        return <p><span>{data.text}</span></p>
    })
)

const companyData = FooterCompany;
let company = null;
company = (
    companyData.map((data, index) => {
        return <p><span>{data.text}</span></p>
    })
)

const favoriteData = FooterFavorite;
let favorite = null;
favorite = (
    favoriteData.map((data, index) => {
        return <p><span>{data.text}</span></p>
    })
)

const socialIcons = [
    <i className="fab fa-twitter twitter"></i>, 
    <i className="fab fa-facebook-f facebook"></i>,
    <i className="fab fa-linkedin-in linkedin"></i>,
    <i className="fab fa-youtube youtube"></i>,
    <i className="fab fa-instagram instagram"></i>,
    <i className="fab fa-snapchat-ghost snapchat"></i>
 ]

 let icon = null;
 icon = (
     socialIcons.map((data, index) => {
        return <span>{data}</span>
     })
 )
 

    return (
        <div className="footer">
            <div className="footer-container container">
                <FooterPrimaryNav 
                products={products}
                features={features}
                recources={recources}
                company={company}
                favorite={favorite}
                />

                <div className="footer-container-secondary">
                    <FooterNewsletter />
                    <FooterSocial icons={icon}/>
                </div>

                <FooterLegal />
            </div>
        </div>
    )
}

export default Footer;