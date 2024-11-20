import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function CardCurso({ name, price, image }) {
    return (
        // <div
        //     className="max-w-60 bg-secondary-light md:min-w-64 p-3 rounded-lg text-white"
        // >
        //     <div className="w-full h-40">
        //         <a href="pages/curso">
        //             <img
        //                 src={image}
        //                 alt="Imagen 1"
        //                 className="w-full rounded-md h-full object-cover"
        //             />
        //         </a>
        //     </div>
        //     <div className="flex flex-col justify-between space-y-2 rounded-bl-md rounded-br-md pt-2">
        //         <div className="flex flex-col space-y-2">
        //             <a href="pages/curso">
        //                 <p className="text-lg">
        //                     {name}
        //                 </p>
        //             </a>
        //             <div className="flex text-2xl">
        //                 <FaStar />
        //                 <FaStar />
        //                 <FaStar />
        //                 <FaStar />
        //                 <FaRegStarHalfStroke />
        //                 <i className="fa-regular fa-star"></i>
        //             </div>
        //             <p className="text-3xl font-semibold tracking-wide">
        //                 ${price}
        //             </p>
        //         </div>
        //         <div className="flex justify-center">
        //             <a
        //                 href="pages/carrito"
        //                 className="bg-accent-light w-full font-semibold p-2 rounded-md text-center text-xl"
        //             >Agregar al carrito</a
        //             >
        //         </div>
        //     </div>
        // </div>
        <div className="bg-secondary-light shadow-2xl rounded-xl p-3 w-2/3 mx-auto md:p-3 md:w-64 md:h-auto lg:w-auto lg:h-full grid grid-rows-[6fr_5fr]">
            <div className="max-h-60 min-h-60 ">
                <img
                    className="rounded-lg h-full object-cover"
                    src={image}
                    alt="Imagen Profe"
                />
            </div>
            <div className="flex flex-col justify-between space-y-2 rounded-bl-md rounded-br-md pt-2">
                <div className="flex flex-col space-y-2">
                    <a href="pages">
                        <p className="text-lg">{name}</p>
                    </a>
                    <div className="flex text-2xl">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                    </div>
                    <p className="text-3xl font-semibold tracking-wide">
                        ${price}
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="pages/carrito"
                        className="bg-accent-light w-full font-semibold p-2 rounded-md text-center text-xl"
                    >
                        Agregar al carrito
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardCurso;
