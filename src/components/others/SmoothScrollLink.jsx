import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const SmoothScrollLink = ({ to, children, offset = -80, duration = 500, ...props }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scroller.scrollTo(to, {
                    smooth: true,
                    duration,
                    offset,
                });
            }, 100); 
        } else {
            scroller.scrollTo(to, {
                smooth: true,
                duration,
                offset,
            });
        }
    };

    return (
        <span
            onClick={handleClick}
            className="cursor-pointer"
            {...props}
        >
            {children}
        </span>
    );
};

export default SmoothScrollLink;
