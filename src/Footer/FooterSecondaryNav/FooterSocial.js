import React from 'react';

const FooterSocial = (props) => {


    return (
        <div className="footer-social">
            <div className="footer-social__item">
                {props.icons}
            </div>
        </div>
    )
}


export default FooterSocial;