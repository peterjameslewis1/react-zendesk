import React from 'react';
import SectionInfoBlock from './SectionInfoBlock/SectionInfoBlock';

const SectionInfo = (props) => {

    let infoBlock = null;

    infoBlock = (
        props.data.map((data, index) => {
            return <SectionInfoBlock 
            index={data.key}
            title={data.title}
            text={data.text}
            img={data.img}
            key={index}
            mouseover={props.hoverover}
            mouseout={props.hoverout}
            />
        })
    )

    return (
        <div className="section-3-container-info">
            <div className="section-3-container-info__products">
                <div className="section-3-container-info__products-title">
                    <h2>The Support Suite</h2>
                    <p>The full service experience</p>
                </div>
                <div className="section-3-container-info__products-title">
                    <h2>The Sales Suite</h2>
                    <p>The modern sales solution</p>
                </div>
            </div>

            <div className="section-3-container-info__blocks">
            {infoBlock }
            </div>
        </div>
    )
}


export default SectionInfo;