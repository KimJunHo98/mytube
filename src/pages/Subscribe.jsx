import React from "react";
import { Helmet } from "react-helmet-async";

const Subscribe = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="subscribe">
                <h2 className="blind">구독 정보</h2>
                <div className="container">
                    <div className="inner">
                        <div className="subscribe">subscribe</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Subscribe;
