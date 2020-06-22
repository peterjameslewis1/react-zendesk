import React from 'react';



const SectionInfoBlock = (props) => {

        const backgroundImg = {
            backgroundImage: `url(${props.img})`
        }


    return (
        <>
                <div className="section-3-container-info__blocks-block" key={props.index} onMouseEnter={() => props.mouseover(props)}  >
                <div style={backgroundImg} className="section-3-container-info__blocks-block-img"></div>
                <div className="section-3-container-info__blocks-block-desc" >
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                   
                </div>
                    </div>
           </>
    )
}
// onMouseLeave={() => props.mouseout()}

export default SectionInfoBlock;


