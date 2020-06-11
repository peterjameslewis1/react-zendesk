import React from 'react';

const SectionText = (props) => {

   console.log(props.show)
   console.log(props.component)

    return (
            <div className="section-3-container-text">
                <div className="section-3-container-text__info">
                    <h2>Something for everyone</h2>
                    <p>The customer journey differs for everybody. No matter your business need, our products are flexible enough to pave the path that’s best for your organization.</p>
                </div>

    <div className="section-3-container-text__img"><img src=""/></div>
            </div>
 
    )
}


export default SectionText;