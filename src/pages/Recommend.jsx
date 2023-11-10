import React from "react";
import { Helmet } from "react-helmet-async";

const Recommend = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="recommend">
                <h2 className="blind">개발 추천영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="recommend">Recommend</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Recommend;
