import React from 'react';
import logos from '../customers.json';

const Customers = (props) => {

    const data = logos;
   let customer = null;
   customer = (
    data.map((data, index) => {
        return <img src={data.url} alt="" key={index}/>
    })
   )



    return ( 
        <div className="customer-logos">
            <div className="customer-logos-container container">
                <h4>LEARN FROM THE BEST—OUR CUSTOMERS</h4>
                <div className="customer-logos-container__image">
                    {customer}
                </div>
                <a href="#">See all customer stories</a>
            </div> 
        </div>
    )
}

export default Customers;