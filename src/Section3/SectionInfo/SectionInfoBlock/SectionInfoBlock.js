import React from 'react';
const SectionInfoBlock = (props) => {

    const backgroundImg = {
        backgroundImage: "url(" + `https://d1eipm3vz40hy0.cloudfront.net/images/brand-kit/modules/product-icons/zendesk-${props.title}-white-icon-plain.svg` + ")",
    }


    return (
  
            <div className="section-3-container-info__blocks-block" onMouseOver={() => props.mouseover(props)}>
                <div style={backgroundImg} className="section-3-container-info__blocks-block-img"></div>
                <div className="section-3-container-info__blocks-block-desc">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
  
    )
}


export default SectionInfoBlock;