import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function CardCursoForSearch({ name, price, teacher, image }) {
    return (
        <>
            <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-2 rounded-lg">
                <div>
                    <img
                        src={image}
                        alt="Imagen 1"
                        class="w-full rounded-md h-full object-cover"
                    />
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <p class="font-bold text-base md:text-xl space-y-1">
                            {name}
                        </p>
                        
                        <p class="font-md text-sm">Prof. {teacher}</p>
                    </div>
                </div>
                <div className="flex text-2xl">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </div>
                <div>
                    <p className="text-xl md:text-3xl font-bold">${price}</p>
                </div>
                <div className="flex justify-center ">
                    <Link
                        href="pages/carrito"
                        className="bg-accent-light w-full font-semibold p-2 rounded-md text-center text-base md:text-xl"
                    >
                        Agregar al carrito
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CardCursoForSearch;
