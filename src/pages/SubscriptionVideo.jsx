import React from "react";
import { Helmet } from "react-helmet-async";

const SubscriptionVideo = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="subscription">
                <h2 className="blind">구독 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="subscription">subscription</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubscriptionVideo;
