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
            <main class="m-12 w-11/12 mx-auto space-y-6">
                {/* Seccion Informacion usuario  */}
                <div class="flex items-center justify-between space-x-4 bg-primary-light rounded-2xl p-4 bg-opacity-50">
                    <div class="space-y-2 md:flex md:items-center md:gap-4 md:space-y-0">
                        <FaUser class="fa-solid fa-user text-8xl bg-white rounded-[50%] p-6 flex justify-center" />
                        <p class="text-lg md:text-2xl font-semibold">
                            Lorena Carmen
                        </p>
                    </div>
                    <div class="flex flex-col md:space-y-6">
                        <div class="">
                            <p class="flex flex-col items-center md:flex-row md:justify-between">
                                Puntos acumulados:
                                <span class="font-bold">2500</span>
                            </p>
                        </div>
                        <div>
                            <p class="cursor-pointer flex flex-col items-center md:flex-row md:justify-between">
                                Nivel de aprendizaje:
                                <span class="font-bold rounded-xl p-1 bg-secondary-light dark:text-textPrimary-light">
                                    Experto
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <section class="space-y-2">
                    <h2 class="font-semibold text-2xl">Mis Cursos</h2>
                    <section class="text-textPrimary-dark dark:text-textPrimary-light font-semibold grid grid-cols-2 md:grid-cols-4 gap-2 md:">
                        <div class="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div class="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                                        alt="Imagen 1"
                                        class="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div class="row-start-2 flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p class="text-sm">
                                            Desarrollo Web Completo con PHP,
                                            MySQL, Fetch
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p class="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div class="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        class="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div class="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-2/6"></div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div class="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                                        alt="Imagen 1"
                                        class="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div class="row-start-2 flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p class="text-sm">
                                            Curso de Matemáticas para cualquier
                                            nivel
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p class="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div class="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        class="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div class="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-4/6"></div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div class="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                                        alt="Imagen 1"
                                        class="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div class="row-start-2 flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p class="text-sm">
                                            Curso de Ingles de cero a experto
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p class="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div class="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        class="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div class="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-3/6"></div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-accent-light p-3 rounded-lg grid grid-rows-2 h-full space-y-2">
                            <div class="row-start-1">
                                <Link href="contenidoCurso.html">
                                    <img
                                        src="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                                        alt="Imagen 1"
                                        class="w-full rounded-md h-full object-cover"
                                    />
                                </Link>
                            </div>
                            <div class="row-start-2 flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <Link href="contenidoCurso.html">
                                        <p class="text-sm">
                                            Python sin fronteras
                                        </p>
                                    </Link>
                                    <Stars />
                                    <p class="font-normal">
                                        Prof. Emiliano Guizo
                                    </p>
                                </div>
                                <div class="relative w-full mx-auto">
                                    <input
                                        type="text"
                                        class="bg-gray-200 rounded-xl w-full h-6 pl-2"
                                    />
                                    <div class="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-2/6"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <div class="text-center">
                    <Link
                        href="cursosFinalizados.html"
                        class="bg-secondary-light w-full md:w-auto text-xl text-white dark:text-textPrimary-light font-semibold p-2 rounded-md text-center"
                    >
                        Ver cursos finalizados
                    </Link>
                </div>

                <div class="space-y-4 md:space-y-6">
                    <h2 class="font-semibold text-2xl">Datos Personales</h2>

                    <form action="" class="space-y-4 md:text-xl">
                        <div class="flex justify-between items-center space-x-2">
                            <label for="">Nombre:</label>
                            <div class="relative md:w-5/6 text-white">
                                <input
                                    type="text"
                                    value="Lorena Carmen"
                                    disabled
                                    class="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen class="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div class="flex justify-between items-center space-x-2">
                            <label for="" class="text-lg">
                                Email:
                            </label>
                            <div class="relative md:w-5/6 text-white">
                                <input
                                    type="email"
                                    value="lalorecar@gmail.com"
                                    disabled
                                    class="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen class="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div class="flex justify-between items-center space-x-2">
                            <label for="">Contraseña:</label>
                            <div class="relative md:w-5/6 text-white">
                                <input
                                    type="password"
                                    value="anashe123"
                                    disabled
                                    class="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />

                                <FaPen class="fa-solid fa-pen cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div class="flex justify-between items-center space-x-2">
                            <label for="">Telefono:</label>
                            <div class="relative md:w-5/6 text-white">
                                <input
                                    type="tel"
                                    value="1187364928"
                                    disabled
                                    class="bg-textSecondary-dark dark:bg-textSecondary-light rounded-2xl p-2 md:w-full"
                                />
                                <FaPen class="fa-solid fa-pen cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                    </form>
                </div>

                <div class="text-center" id="boton-cerrarSesion">
                    <Link
                        href="#"
                        class="bg-secondary-light w-full md:w-auto text-xl text-white dark:text-textPrimary-light font-semibold p-2 rounded-md text-center"
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
