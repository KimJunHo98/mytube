import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useMenuContext } from "../context/useMenuContext";
import YouTube from "react-youtube";

import MainMenu from "../components/menu/MainMenu";
import Footer from "../components/section/Footer";

const Player = ({ description, title }) => {
    const { id } = useParams();
    const { activeMenu, resize } = useMenuContext();
    const playerRef = useRef(null);

    useEffect(() => {
        const pauseVideo = () => {
            if (playerRef.current && playerRef.current.internalPlayer && playerRef.current.internalPlayer.getVideoUrl()) {
                playerRef.current.internalPlayer.pauseVideo();
            }
        };

        if (playerRef.current && playerRef.current.internalPlayer && playerRef.current.internalPlayer.getVideoUrl()) {
            pauseVideo();
        } else {
            const onReadyHandler = () => {
                pauseVideo();
            };

            playerRef.current.internalPlayer.onReady = onReadyHandler;
        }
    }, [id]);

    const options = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <Helmet titleTemplate="%s | MyTube" defaultTitle="MyTube" defer={false}>
                {title && <title>{title}</title>}
                <meta name="description" content={description} />
            </Helmet>

            <aside className={`menu_container ${resize ? "" : "resize"} ${activeMenu ? "active" : ""}`} role="menu">
                <h2 className="blind">사이드메뉴</h2>
                {activeMenu && <MainMenu />}
                <Footer />
            </aside>
            {id && (
                <section id="player">
                    <h2 className="blind">영상 플레이</h2>
                    <div className="container">
                        <div className="inner">
                            <div className="player">
                                <div className="player_video_box">
                                    <YouTube videoId={id} opts={options} onReady={() => {}} ref={playerRef} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Player;
