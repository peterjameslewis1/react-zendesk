import React from 'react';

const FooterNewsletter = () => {


    return (
        <div className="footer-newsletter">
            <div className="footer-newsletter__text">
                <h4>Enter the Fold</h4>
                <p>Subscribe to our newsletter</p>
            </div>
            <form className="footer-newsletter__form">
                <div className="footer-newsletter__form-input">
                    <input type="text" placeholder="Whats your email?"/>
                    <div><i className="fas fa-chevron-right"></i></div>
                </div>
                <div className="footer-newsletter__form-text">
                    <input type="checkbox" />
                    <p>Please also send me occasional emails about Zendesk products and services. (You can unsubscribe at any time.) </p>
                </div>
            </form>
        </div>
    )
}


export default FooterNewsletter;