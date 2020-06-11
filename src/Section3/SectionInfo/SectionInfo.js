import React, { useState } from 'react';
import SectionInfoBlock from './SectionInfoBlock/SectionInfoBlock';

const SectionInfo = (props) => {

    

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
            <SectionInfoBlock 
            title="support"
            text="Integrated customer support >"
            mouseover={props.hover}
            />

            <SectionInfoBlock 
            title="sell"
            text="Sales CRM >" 
            mouseover={props.hover}
            />

            <SectionInfoBlock 
            title="guide"
            text="Knowledge base and smart self-service >" 
            mouseover={props.hover}
            />

            <SectionInfoBlock 
            title="explore"
            text="Analytics and reporting >" 
            mouseover={props.hover}
            />

            <SectionInfoBlock 
            title="chat"
            text="Live chat and messaging >" 
            mouseover={props.hover}
            />
            <SectionInfoBlock 
            title="gather"
            text="Community forum >" 
            mouseover={props.hover}
            />
            <SectionInfoBlock 
            title="talk"
            text="Call center software >" 
            mouseover={props.hover}
            />
            <SectionInfoBlock 
            title="connect"
            text="Proactive campaigns >" 
            mouseover={props.hover}
            />
            </div>
        </div>
    )
}


export default SectionInfo;