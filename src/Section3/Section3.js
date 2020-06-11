import React, { useState } from "react";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionText from "./SectionText/SectionText";

const Section3 = () => {
    const [imgComponent, setImgComponent] = useState(false);
    
    let component;
    const mouseOverHandler = (props) => {
        component = `https://web-assets.zendesk.com/images/p-home/redesign-2019/products/${props.title}-2x.png`;
        props.title ? setImage() : console.log('false');
        // console.log(components.name)
    }

    const setImage = (mouseOverHandler) => {
        setImgComponent(!imgComponent);

        const img = component;
        console.log(img);
    }

    return(
        <div className="section-3">
            <div className="section-3-container container">
                <SectionInfo hover={mouseOverHandler}/>
                <SectionText show={setImage}/>
            </div>
        </div>
    )
}

export default Section3;