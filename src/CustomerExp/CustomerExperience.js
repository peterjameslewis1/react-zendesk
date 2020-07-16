import React from 'react';
import { useInView } from 'react-intersection-observer'
// import { motion } from 'framer-motion'

const CustomerExperience = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })



    return (
        <div className="customer-exp">


            <div ref={ref} className={inView ? "animation" : "customer-exp-container container"}>
                <div className="customer-exp-container__text">
                    <div className="customer-exp-container__title">
                        <h2>The best customer experiences are built with Zendesk</h2>
                    </div>
                    <div className="customer-exp-container__cta">
                        <a href="#">Free trial</a>
                    </div>
                </div>

                <div className="customer-exp-container__img">
                    <img src="https://web-assets.zendesk.com/images/p-home/redesign-2019/customer-experience/photo-2-2x.jpg" alt="" className="female" />
                    <img src="https://web-assets.zendesk.com/images/p-home/redesign-2019/customer-experience/photo-1-2x.jpg" alt="" className="female-1" />
                    <img src="https://web-assets.zendesk.com/images/p-home/redesign-2019/customer-experience/photo-3-2x.jpg" alt="" className="male" />
                </div>
            </div>

        </div>
    )
}


export default CustomerExperience;