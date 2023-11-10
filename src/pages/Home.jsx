import React from "react";
import { Helmet } from "react-helmet-async";
// import { ImSpinner8 } from "react-icons/im";

const Home = ({ title, description }) => {
    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>
            <section id="home">
                <h2 className="blind">홈화면</h2>
                <div className="container">
                    <div className="inner">
                        <div className="home">
                            {/* <div className="loading_spinner">
                                <span className="spinner_icon">
                                    <ImSpinner8 />
                                </span>
                            </div> */}
                            {/* map함수 처리해야함 */}
                            <div className="home_contents">home_contents</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
