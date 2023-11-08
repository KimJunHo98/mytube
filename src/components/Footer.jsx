import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <h2 className="blind">푸터</h2>
            <div className="inner">
                <div className="footer">
                    <p className="ft_copy">&copy; {new Date().getFullYear()} MyTube made by. KimJunHo</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
