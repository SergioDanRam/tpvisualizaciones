import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Stars({color}) {
    return (
        <>
            <div className={`flex text-2xl ${color}`}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
            </div>
        </>
    );
}

export default Stars;
