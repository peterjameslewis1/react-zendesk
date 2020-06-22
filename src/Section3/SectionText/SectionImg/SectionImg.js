import React from 'react';



const SectionImg = (props) => {
    
    return <img src={props.img} alt="" key={props.index} onMouseEnter={props.mouseover(props)}/>
}


export default SectionImg;

