import React from "react";
import { useMenuContext } from "../../context/useMenuContext";

const Main = (props) => {
    const { mainRef } = useMenuContext();

    return (
        <main id="main" role="main" ref={mainRef}>
            {props.children}
        </main>
    );
};

export default Main;
