import React from "react";
import { Helmet } from "react-helmet-async";

const Shorts = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="shorts">
                <h2 className="blind">쇼츠 영상</h2>
                <div className="container">
                    <div className="inner">
                        <div className="shorts">shorts</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shorts;
