import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function page() {
    return (
        <>
            <Header />
            <main className="my-12 w-11/12 mx-auto space-y-8 md:w-10/12">
                {/* Seccion Video   */}
                <section className="lg:grid lg:grid-cols-[70%_30%]">
                    <video
                        className="w-full h-auto lg:min-h-[420px] lg:max-h-[420px]"
                        muted
                        controls
                    >
                        <source
                            src="https://pagedone.io/asset/uploads/1705298724.mp4"
                            type="video/mp4"
                        />
                        <track
                            src="subtitulos.vtt"
                            kind="subtitles"
                            srcLang="es"
                            label="Español"
                        />
                        Tu navegador no soporta la etiqueta de video.
                    </video>
                    <div className="mx-auto max-h-64 lg:min-h-[420px] lg:max-h-[420px] overflow-y-auto text-textPrimary-light">
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Los proyectos que construiremos en este curso
                            </summary>
                            <div className="p-2 flex flex-col gap-2 text-textPrimary-light">
                                <div>
                                    <a src="#">
                                        <p>Proyecto 1 - Básico</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 2 - Básico</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 3 - Básico</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 4 - Intermedio</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 5 - Intermedio</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 6 - Avanzado</p>
                                    </a>
                                    <a src="#">
                                        <p>Proyecto 7 - Final</p>
                                    </a>
                                </div>
                                <Link
                                    href={"/leccion"}
                                    className="text-white bg-blue-600 rounded-md p-1 w-fit"
                                >
                                    Lección
                                </Link>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Creando El proyecto paso a paso en
                                HTML
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Agregando estilos con CSS
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Introducción a CSS Flex
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Introducción a CSS Grid
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>

                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Responsive Design
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 1: Ultimos retoques del primer proyecto
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 2: Principios Basicos de Metodologia
                                BEM
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 2: Introduccion a EcmaScript 2016
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 2: Programacion Orientada a Objetos en
                                Javascript
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                        <details className="border border-gray-300 rounded-md mb-2">
                            <summary className="cursor-pointer bg-gray-100 p-2 rounded-md hover:bg-gray-200">
                                Proyecto 2: DOM
                            </summary>
                            <div className="p-2 text-textPrimary-light">
                                <a src="#">
                                    <p>Video 1</p>
                                </a>
                                <a src="#">
                                    <p>Video 2</p>
                                </a>
                                <a src="#">
                                    <p>Video 3</p>
                                </a>
                                <a src="#">
                                    <p>Video 4</p>
                                </a>
                                <a src="#">
                                    <p>Video 5</p>
                                </a>
                                <a src="#">
                                    <p>Video 6</p>
                                </a>
                                <a src="#">
                                    <p>Video 7</p>
                                </a>
                                <a src="#">
                                    <p>Video 8</p>
                                </a>
                                <a src="#">
                                    <p>Video 9</p>
                                </a>
                                <a src="#">
                                    <p>Video 10</p>
                                </a>
                            </div>
                        </details>
                    </div>
                </section>

                {/* Seccion Informacion curso   */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">
                        Información del curso
                    </h2>
                    <div className="space-y-2 md:space-y-6 lg:text-xl border border-dashed border-background-dark rounded-xl p-2">
                        <p className="font-semibold">
                            Categoria:
                            <span className="font-normal">
                                Programación Web
                            </span>
                        </p>
                        <div className="flex flex-col space-y-2">
                            <p className="text-lg font-semibold lg:text-2xl">
                                Master Frontend NextJs 15 | HTML, CSS, JS,
                                React, Responsive Design
                            </p>
                            <div className="flex text-secondary-light">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="flex justify-between lg:justify-normal md:flex-row md:space-x-2">
                                <p>132 clases</p>
                                <div className="flex items-center space-x-1">
                                    <i className="fa-solid fa-clock"></i>

                                    <p>14 horas en total</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seccion Progreso   */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-2xl">Tu Progreso</h2>
                    <div className="relative w-full mx-auto">
                        <input
                            type="text"
                            className="bg-gray-200 rounded-xl w-full h-6 pl-2"
                        />
                        <div className="absolute inset-0 flex items-center justify-start bg-secondary-light rounded-xl h-6 w-3/6"></div>
                        <p className="absolute inset-0 left-32 md:left-[350px] lg:left-[390px] xl:left-[550px] font-semibold">
                            44%
                        </p>
                    </div>
                </div>

                {/* Seccion consultas  */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Consulta de los alumnos
                    </h2>

                    <div className="text-white dark:bg-textSecondary-light bg-opacity-25 rounded-2xl p-4 flex justify-center space-x-2 md:justify-start">
                        <div className="text-8xl text-white">
                            <FaUser />{" "}
                        </div>
                        <div className="space-y-2">
                            <p>mirthapontevechhia@outlook.com</p>
                            <p className="font-semibold">
                                ¿Por qué el programa no funciona en mi pc?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium asperiores repellat
                                maiores possimus odio impedit laboriosam ad
                                ipsam quae similique.
                                <span className="hidden lg:block">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Laudantium asperiores
                                    repellat maiores possimus odio impedit
                                    laboriosam ad ipsam quae similique. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Laudantium asperiores repellat maiores
                                    possimus odio impedit laboriosam ad ipsam
                                    quae similique.
                                </span>
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="flex items-center space-x-3"
                                >
                                    <FaMessage />
                                    <p>26 respuestas</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-white dark:bg-textSecondary-light bg-opacity-25 rounded-2xl p-4 flex justify-center space-x-2">
                        <div className="text-8xl text-white">
                            <FaUser />{" "}
                        </div>
                        <div className="space-y-2">
                            <p>mirthapontevechhia@outlook.com</p>
                            <p className="font-semibold">
                                Tengo dudas con una pregunta de la lección
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. A voluptates nisi libero esse
                                possimus ipsa, officia facere eaque accusantium
                                omnis. officia facere eaque accusantium omnis.
                                officia facere eaque accusantium omnis.
                            </p>
                            <div>
                                <a
                                    href="#"
                                    className="flex items-center space-x-3"
                                >
                                    <FaMessage />
                                    <p>26 respuestas</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg">
                            ¿Tenes alguna duda? Visita nuestro {""}
                            <Link href="/foro" className="text-secondary-light">
                                foro
                            </Link>
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h1 className="font-semibold text-2xl">
                        Agrega contenido a la lección
                    </h1>
                    <textarea
                        name=""
                        id=""
                        className="border-2 border-gray-400 rounded-xl p-4 w-full h-32"
                    ></textarea>
                    <div>
                        <Link
                            href={"/contenidoCurso"}
                            className="bg-secondary-light p-2 rounded-xl text-lg font-semibold "
                        >
                            Proponer Contenido
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default page;
