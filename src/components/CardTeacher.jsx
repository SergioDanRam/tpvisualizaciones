import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

function CardTeacher({ name, profession, image }) {
  return (
    <div className="bg-secondary-light shadow-2xl rounded-xl p-2 md:p-3 md:w-72 lg:w-auto md:h-96 lg:h-full grid grid-rows-[8fr_5fr]">
      {/* <div className=" lg:min-w-60 lg:max-w-60 lg:max-h-60 lg:min-h-60">
                <img
                    className="rounded-lg h-full object-cover"
                    src={image}
                    alt="Imagen Profe"
                />
            </div> */}
      <div className="relative lg:min-w-60 lg:max-w-60 lg:max-h-60 lg:min-h-60">
        <img
          className="rounded-lg h-full object-cover"
          src={image}
          alt="Imagen Profe"
        />
        <div className="text-[9px] lg:text-sm rounded-lg absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="space-y-2 text-white p-4 rounded-lg text-center">
            <div>
              <p>
                Mi nombre es {name}, soy profesor de Desarrollo Web con más de
                10 años de experiencia en la enseñanza en línea y presencial. Me
                especializo en el frontend y backend.
              </p>
            </div>
            <div className="text-[9px] lg:text-sm flex flex-wrap items-center justify-center  gap-1">
              <p className="text-black rounded-lg p-1 bg-secondary-light inline">
                React
              </p>
              <p className="text-black rounded-lg p-1 bg-secondary-light inline">
                Node.Js
              </p>
              <p className="text-black rounded-lg p-1 bg-secondary-light inline">
                Next.Js
              </p>
              <p className="text-black rounded-lg p-1 bg-secondary-light inline">
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between md:min-h-32 py-2 space-y-2 mt-1 md:mt-2">
        <div>
          <p className="text-lg lg:text-2xl font-semibold">{name}</p>
          <p className="text-sm lg:text-base">{profession}</p>
        </div>
        <hr />
        <div className="flex items-center space-x-1">
          {/* <a
                        href="pages/busqueda"
                        className="hover:underline text-sm lg:text-lg"
                    >Cursos del Instructor</a
                    > */}
          <Link href={"./busqueda"}>Cursos del Instructor</Link>
          <i className="fa-solid fa-arrow-right"></i>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default CardTeacher;
