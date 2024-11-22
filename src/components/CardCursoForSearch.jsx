"use client";
import Link from "next/link";
import Stars from "./Stars";
function CardCursoForSearch({ name, price, teacher, image }) {
    return (
        <>
            <div className="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-2 rounded-lg">
                <div>
                    <Link href={"/curso"}>
                        <img
                            src={image}
                            alt="Imagen 1"
                            className="w-full rounded-md h-full object-cover"
                        />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <Link href={"/curso"}>
                            <p className="font-bold text-base md:text-xl space-y-1">
                                {name}
                            </p>
                        </Link>

                        <p className="font-md text-sm">Prof. {teacher}</p>
                    </div>
                </div>
                <Stars />
                <div>
                    <p className="text-xl md:text-3xl font-bold">${price}</p>
                </div>

                <Link
                    href="/carrito"
                    className="flex justify-center bg-primary-dark text-white rounded-md py-1"
                >
                    Agregar al carrito
                </Link>
            </div>
        </>
    );
}

export default CardCursoForSearch;
