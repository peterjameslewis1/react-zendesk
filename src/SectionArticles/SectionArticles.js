import React from 'react';
import articleData from './articles.json';

const SectionArticles = () => {

        const data = articleData;
        let articles = null;
        articles = (
            data.map((data, index) => {
            return <p key={index}>{data.article}</p>
            })
        )

    return (
        <div className="section-article">
            <div className="section-article-container container">
                <div className="section-article-container__title">
                <h3>More Zendesk goodness</h3>
                </div>
                <div className="section-article-container__text">
                <div>{articles}</div>
                </div>
            </div>
        </div>
    )
}


export default SectionArticles;