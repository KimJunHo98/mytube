import React from "react";
import { useActiveMenu } from "../../context/useActiveMenu";

const Main = (props) => {
    const { activeMenu } = useActiveMenu();

    return (
        <main id="main" role="main" style={{ paddingLeft: activeMenu ? "260px" : "88px" }}>
            {props.children}
        </main>
    );
};

export default Main;
