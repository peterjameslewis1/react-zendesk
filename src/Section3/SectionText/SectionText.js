import React from 'react';
import SectionImg from './SectionImg/SectionImg';

const SectionText = (props) => {

        let img = null;

        img = (
            props.data.map((data, index) => {
                return  <SectionImg 
                index={index}
                img={data.hoverImg}
                key={index}
                mouseover={props.hoverover} 
                />
            })
        )

    return (
            <div className="section-3-container-text">
                <div className="section-3-container-text__info">
                    <h2>Something for everyone</h2>
                    <p>The customer journey differs for everybody. No matter your business need, our products are flexible enough to pave the path that’s best for your organization.</p>
                </div>

            <div className="section-3-container-text__img">
              {img}
            </div>
            </div>
 
    )
}


export default SectionText;