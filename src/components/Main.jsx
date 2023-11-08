import React from "react";
import { useActiveMenu } from "../context/useActiveMenu";

const Main = () => {
    const { activeMenu } = useActiveMenu();

    return (
        <main id="main" role="main" style={{ paddingLeft: activeMenu ? "260px" : "88px" }}>
            main
        </main>
    );
};

export default Main;
