import React from "react";
import Stars from "./Stars";
import Link from "next/link";

function CardCursoFinished({ name, teacher, image }) {
    return (
        <>
            <div className="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                <div>
                    <Link href={"/curso"}>
                        <img
                            src={image}
                            alt="Imagen 1"
                            className="w-full rounded-md h-full object-cover"
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-between space-y-4">
                    <div className="flex flex-col space-y-2">
                        <Link href={"/curso"}>
                            <p className="text-sm">{name} </p>
                        </Link>

                        <Stars />
                        <p className="font-normal">Prof. {teacher}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCursoFinished;
