import { CiKeyboard } from "react-icons/ci";

function CardCategory({ name, icon, colorIcon}) {


    return (
        <div
            className="shadow-md flex items-center bg-gray-200 :bg-gray-800 p-2 transform transition-all duration-300 hover:scale-110 cursor-pointer"
        >
            <a href="pages/busqueda" className="w-full">
                <div className="flex items-center justify-between">

                    <p className="font-semibold">
                        {name}
                    </p>
                    <div className={`text-2xl ${colorIcon} `}>
                        {icon}
                    </div>
                </div>
                <p>400 cursos</p>
            </a>
        </div>
    )
}

export default CardCategory