import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Stars() {
    return (
        <>
            <div className="flex text-2xl">
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
