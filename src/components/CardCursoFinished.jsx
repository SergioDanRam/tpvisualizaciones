import React from "react";
import Stars from "./Stars";

function CardCursoFinished({ name, teacher, image }) {
    return (
        <>
            <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                <div>
                    <img
                        src={image}
                        alt="Imagen 1"
                        class="w-full rounded-md h-full object-cover"
                    />
                </div>
                <div class="flex flex-col justify-between space-y-4">
                    <div class="flex flex-col space-y-2">
                        <p class="text-sm">{name} </p>
                        <Stars />
                        <p class="font-normal">Prof. {teacher}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCursoFinished;
