import React from "react";
import { Helmet } from "react-helmet-async";
import { useMenuContext } from "../context/useMenuContext";
import useSearchVideo from "../context/useSearchVideo";

import Menu from "./Menu";
import ViewCount from "./ViewCount";
import Date from "./Date";

const Search = ({ title, description }) => {
    const { resize } = useMenuContext();
    const { loading } = useSearchVideo();

    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>

            <Menu />
            {loading && (
                <section id="search" className={resize ? "" : "resize"}>
                    <h2 className="blind">검색 화면</h2>
                    <div className="container">
                        <div className="inner">
                            <div className="search">
                                <article className="search_contents">
                                    <div className="contents_area">
                                        <Date />
                                        <ViewCount />
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Search;
