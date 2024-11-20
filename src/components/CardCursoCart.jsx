import Stars from "./Stars";
import { FaTrash } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function CardCursoCart({ name, price, image, hours, classCant }) {
  return (
    <>
      <div className="flex p-2 rounded-lg md:flex md:justify-between  border-dashed border-gray-300 border-2">
        <div className="flex space-x-4  w-full justify-between ">
          <div className="flex md:w-4/6 justify-between md:justify-normal ">
            <div className="">
              <img
                src={image}
                alt="Imagen 1"
                className="rounded-md object-cover h-14 w-28"
              />
            </div>
            <div className="flex flex-col space-y-4 p-1">
              <div className="flex flex-col space-y-1">
                <p className="text-sm">{name}</p>
                <Stars color='text-yellow-500'/>
                <div className="flex flex-col md:flex-row md:space-x-2 w-full">
                  <p>{classCant} clases</p>
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <p>{hours} horas en total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex  mx-2 h-auto  md:justify-end items-end">
            <FaTrash className="pr-2 text-2xl hover:text-red-700 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-center flex-row  border-l border-dashed border-gray-700">
          <div className="">
            <p className="text-2xl font-semibold tracking-wide mx-2">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCursoCart;
