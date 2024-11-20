import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import Stars from "@/components/Stars";
import { FaUser } from "react-icons/fa";

function PerfilPage() {
    return (
        <>
            <Header></Header>
            <main className="m-12 w-11/12 mx-auto space-y-6">
                {/* Seccion Informacion usuario  */}
                <div className="flex items-center justify-between space-x-4 bg-primary-light rounded-2xl p-4 bg-opacity-50">
                    <div className="space-y-2 md:flex md:items-center md:gap-4 md:space-y-0">
                        <FaUser className="fa-solid fa-user text-8xl bg-white rounded-[50%] p-6 flex justify-center" />
                        <p className="text-lg md:text-2xl font-semibold">
                            Lorena Carmen
                        </p>
                    </div>
                    <div className="flex flex-col md:space-y-6">
                        <div className="">
                            <p className="flex flex-col items-center md:flex-row md:justify-between">
                                Puntos acumulados:
                                <span className="font-bold">2500</span>
                            </p>
                        </div>
                        <div>
                            <p className="cursor-pointer flex flex-col items-center md:flex-row md:justify-between">
                                Nivel de aprendizaje:
                                <span className="font-bold rounded-xl p-1 bg-secondary-light dark:text-textPrimary-light">
                                    Experto
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <section className="space-y-2">
                    <h2 className="font-semibold text-2xl">Mis Cursos</h2>
                    <section className="text-textPrimary-dark dark:text-textPrimary-light font-semibold grid grid-cols-2 md:grid-cols-4 gap-2 md:">
                        <div className="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div className="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                                        alt="Imagen 1"
                                        className="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="row-start-2 flex flex-col justify-between space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p className="text-sm">
                                            Desarrollo Web Completo con PHP,
                                            MySQL, Fetch
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p className="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div className="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        className="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-2/6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div className="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                                        alt="Imagen 1"
                                        className="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="row-start-2 flex flex-col justify-between space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p className="text-sm">
                                            Curso de Matemáticas para cualquier
                                            nivel
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p className="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div className="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        className="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-4/6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div className="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                                        alt="Imagen 1"
                                        className="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="row-start-2 flex flex-col justify-between space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p className="text-sm">
                                            Curso de Ingles de cero a experto
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p className="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div className="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        className="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-3/6"></div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div className="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                                        alt="Imagen 1"
                                        className="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="row-start-2 flex flex-col justify-between space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p className="text-sm">
                                            Python sin fronteras
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p className="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div className="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        className="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-2/6"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <div className="text-center">
                    <Link
                        href="cursosFinalizados.html"
                        className="bg-secondary-light w-full md:w-auto text-xl text-white dark:text-textPrimary-light font-semibold p-2 rounded-md text-center"
                    >
                        Ver cursos finalizados
                    </Link>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <h2 className="font-semibold text-2xl">Datos Personales</h2>

                    <form action="" className="space-y-4 md:text-xl">
                        <div className="flex justify-between items-center space-x-2">
                            <label >Nombre:</label>
                            <div className="relative md:w-5/6 text-white">
                                <input
                                    type="text"
                                    value="Lorena Carmen"
                                    disabled
                                    className="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen className="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-2">
                            <label  className="text-lg">
                                Email:
                            </label>
                            <div className="relative md:w-5/6 text-white">
                                <input
                                    type="email"
                                    value="lalorecar@gmail.com"
                                    disabled
                                    className="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen className="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-2">
                            <label >Contraseña:</label>
                            <div className="relative md:w-5/6 text-white">
                                <input
                                    type="password"
                                    value="anashe123"
                                    disabled
                                    className="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen className="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center space-x-2">
                            <label >Telefono:</label>
                            <div className="relative md:w-5/6 text-white">
                                <input
                                    type="tel"
                                    value="1187364928"
                                    disabled
                                    className="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />
                                <FaPen className="fa-solid fa-pen cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="text-center" id="boton-cerrarSesion">
                    <Link
                        href="#"
                        className="bg-secondary-light w-full md:w-auto text-xl text-white dark:text-textPrimary-light font-semibold p-2 rounded-md text-center"
                    >
                        Cerrar Sesión
                    </Link>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default PerfilPage;
