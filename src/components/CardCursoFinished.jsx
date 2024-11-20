import React from "react";
import Stars from "./Stars";

function CardCursoFinished({ name, teacher, image }) {
    return (
        <>
            <div className="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                <div>
                    <img
                        src={image}
                        alt="Imagen 1"
                        className="w-full rounded-md h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between space-y-4">
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm">{name} </p>
                        <Stars />
                        <p className="font-normal">Prof. {teacher}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCursoFinished;
