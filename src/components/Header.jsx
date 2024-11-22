"use client";
import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import imagen from "/src/assets/LogoCompleto.png"

function Header() {
  return (
    <div>
      <header className="bg-primary-light  p-2 flex justify-between text-white  shadow-md">
        <div className="container flex justify-between items-center mx-auto lg:w-11/12">
          <div className="flex items-center md:justify-between">
            <Link href="./">
              <Image
                src={imagen} // Ruta relativa o URL completa
                alt="Descripción de la imagen"
                width={50} // Ancho de la imagen
                height={50} // Alto de la imagen
                className=""
              />
              
            </Link>
          </div>
          <form action="" className="hidden md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Ej. Diseño, Ingles, Desarrollo Profesional,etc"
                className="pl-10 border rounded-tl-md rounded-bl-md lg:w-[500px] text-black"
              />

              <FaSearch className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className="bg-primary- hover:bg-primary-light rounded-tr-md rounded-br-md">
              <Link href="./busqueda" className="pl-2">
                Buscar
              </Link>
            </button>
          </form>
          <div className="flex items-center space-x-3">
            {/* {!user ? (
              <div className="hidden md:flex ">
                <a href="./iniciarSesion">Iniciar Sesión</a>
              </div>
            ) : ( */}
            <>
              <Link href={"/perfil"}>
                <FaUser className="text-2xl"/>
              </Link>
              <div className="flex items-center space-x-1">
                <Link href="./carrito" className="flex">
                  <FaShoppingCart className="text-2xl"/>
                </Link>
              </div>
            </>
            {/* )} */}
            <TiThMenu className="md:hidden" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
