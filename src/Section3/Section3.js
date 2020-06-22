import React, { useState } from "react";
import SectionInfo from "./SectionInfo/SectionInfo";
import SectionText from "./SectionText/SectionText";
import Data from '../data.json';



const Section3 = (props) => {
    const [blockState, setBlockState] = useState(false);
    const [imgComponent, setImgComponent] = useState(false);

const data = Data;

    const onMouseOver = (props) => {
       return;
    }
    
    const onMouseOut = (props) => {
        console.log('onMouseOut');
        setBlockState(!blockState);
        setImgComponent(!imgComponent);
    }


    return(
        <div className="section-3">
            <div className="section-3-container container">

                <SectionInfo 
                hoverover={onMouseOver} 
                hoverout={onMouseOut}
                data={data}
                />


                <SectionText 
                hoverover={onMouseOver} 
                hoverout={onMouseOut} 
                data={data}
                />
                
            </div>
        </div>
    )
}

export default Section3;