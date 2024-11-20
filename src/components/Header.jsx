import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

function Header() {
    return (
        <div>
            <header className="bg-primary-light  p-4 flex justify-between text-white  shadow-md">
                <div className="container flex justify-between items-center mx-auto lg:w-11/12">
                    <div className="flex items-center md:justify-between">
                        <Link href="./">
                            <MdHome />
                        </Link>
                    </div>
                    <form action="" className="hidden md:flex">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ej. Diseño, Ingles, Desarrollo Profesional,etc"
                                className="pl-10 border rounded-tl-md rounded-bl-md lg:w-[500px] text-black"
                            />

                            {/* <i
									className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
								></i> */}
                            <FaSearch className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <button className="bg-primary- hover:bg-primary-light rounded-tr-md rounded-br-md">
                            <a href="./busqueda" className="p-2">
                                Buscar
                            </a>
                        </button>
                    </form>
                    <div className="flex items-center space-x-3">
                        <div className="hidden md:flex ">
                            <a href="./iniciarSesion">Iniciar Sesión</a>
                        </div>
                        <div className="flex items-center space-x-1">
                            <a href="./carrito" className="flex">
                                <FaShoppingCart />
                            </a>
                        </div>
                        <button href="" className="Mode flex">
                            <i className="fa-solid fa-moon"></i>
                        </button>
                        <TiThMenu className="md:hidden"/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
