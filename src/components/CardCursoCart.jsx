import Stars from "./Stars";
import { FaTrash } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function CardCursoCart({ name, price, image, hours, classCant }) {
    return (
        <>
            <div class="flex p-2 rounded-lg border border-dashed bg-gray-100 border-background-dark dark:border-background-light md:flex md:justify-between">
                <div class="flex space-x-4  w-full justify-between ">
                    <div className="flex md:w-4/6 justify-between md:justify-normal ">
                        <div class="">
                            <img
                                src={image}
                                alt="Imagen 1"
                                class="rounded-md object-cover h-14 w-28"
                            />
                        </div>
                        <div class="flex flex-col space-y-4 p-1">
                            <div class="flex flex-col space-y-1">
                                <p class="text-sm">{name}</p>
                                <Stars />
                                <div class="flex flex-col md:flex-row md:space-x-2 w-full">
                                    <p>{classCant} clases</p>
                                    <div class="flex items-center space-x-1">
                                        <FaClock />
                                        <p>{hours} horas en total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex  mx-2 h-auto  md:justify-end items-end">
                        <FaTrash className="pr-2 text-2xl" />
                    </div>
                </div>

                <div class="flex items-center justify-center flex-row  border-l border-dashed border-gray-700">
                    <div className="">
                        <p class="text-2xl font-semibold tracking-wide mx-2">
                            ${price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCursoCart;
