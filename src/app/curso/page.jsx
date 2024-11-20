"use client"
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import React from "react";
import { FaClock } from "react-icons/fa";
import CarruselOpinion from "../Carrousel";
import Link from "next/link";

function CursoPage() {
    return (
        <>
            <Header />
            <main class="my-12 w-11/12 mx-auto space-y-8 md:w-10/12">
                {/* Detalle Curso   */}
                <section class="relative mt-24 mb-8 flex flex-col bg-accent-light text-textPrimary-dark p-4 rounded-lg space-y-4 md:flex-row-reverse lg:grid lg:grid-cols-2 lg:scale-x-[-1]">
                    <div class="md:w-7/12 lg:w-10/12 ">
                        <img
                            src="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                            alt="Imagen 1"
                            class="rounded-md object-cover lg:w-full"
                        />
                    </div>
                    <div class="space-y-2 md:space-y-6 lg:scale-x-[-1] lg:text-xl text-white">
                        <p class="font-bold">
                            Categoria:
                            <span class="font-normal">Programación Web</span>
                        </p>
                        <div class="flex flex-col space-y-2">
                            <p class="text-lg font-bold lg:text-2xl">
                                Desarrollo Web Completo con PHP, MySQL, Fetch
                            </p>
                            <Stars />
                            <div class="flex justify-between lg:justify-normal md:flex-row md:space-x-2">
                                <p>132 clases</p>
                                <div class="flex items-center space-x-1">
                                    <FaClock />

                                    <p>14 horas en total</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-lg font-semibold lg:text-xl">
                            Eduardo Valdez Bahia
                        </p>
                        <p class="h-12 bg-background-dark bg-opacity-30 text-2xl p-2 dark:bg-accent-darktext-white font-semibold rounded-md text-center w-40 text-white lg:text-4xl lg:h-16 lg:w-52 lg:py-3">
                            $10000
                        </p>
                    </div>
                    <div class="flex justify-center lg:scale-x-[-1] lg:m-10">
                        <Link
                            href="#"
                            class="absolute right-4 -bottom-6 bg-secondary-light text-xl text-white w-4/6 font-semibold p-2 rounded-md text-center lg:text-2xl"
                        >
                            Agregar al carrito
                        </Link>
                    </div>
                </section>

                {/* Lo que se aprendera   */}
                <div class="space-y-4">
                    <h2 class="font-semibold text-xl">
                        En este curso aprenderas
                    </h2>
                    <ul class="list-disc px-3 space-y-2">
                        <li>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ad, soluta?
                        </li>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Nam aliquid assumenda officiis magnam
                            reprehenderit modi reiciendis omnis hic natus.
                        </li>
                        <li>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam eveniet incidunt nisi nulla magnam
                            laboriosam tempore.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae, omnis aperiam?
                        </li>
                    </ul>
                </div>

                {/* Reseñas */}
                <div class="space-y-4">
                    <h2 class="font-semibold text-xl">
                        Reseñas de los alumnos
                    </h2>

                    {/* Contenedor del carrusel  */}

                    <section class="text-textPrimary-light font-semibold ">
                        {/* <div class="max-w-52 bg-secondary-light md:grid lg:grid-rows-0 p-3 space-y-4 rounded-lg mx-auto">
                            <div>
                                <h3 class="font-semibold text-lg">
                                    Excelente curso
                                </h3>
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates aut et at
                                        nulla nemo cum quasi quod excepturi eos
                                        illum vitae tempore commodi, praesentium
                                        qui facere reiciendis modi libero
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        Gustavo Perez
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid p-3 space-y-4 rounded-lg mx-auto">
                            <div>
                                <h3 class="font-semibold text-lg">
                                    Excelente curso
                                </h3>
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates aut et at
                                        nulla nemo cum quasi quod excepturi eos
                                        illum vitae tempore commodi, praesentium
                                        qui facere reiciendis modi libero
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        Cachito Mendez
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid p-3 space-y-4 rounded-lg mx-auto">
                            <div>
                                <h3 class="font-semibold text-lg">
                                    Excelente curso
                                </h3>
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates aut et at
                                        nulla nemo cum quasi quod excepturi eos
                                        illum vitae tempore commodi, praesentium
                                        qui facere reiciendis modi libero
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        Hernan Dario
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid p-3 space-y-4 rounded-lg mx-auto">
                            <div>
                                <h3 class="font-semibold text-lg">
                                    Excelente curso
                                </h3>
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptates aut et at
                                        nulla nemo cum quasi quod excepturi eos
                                        illum vitae tempore commodi, praesentium
                                        qui facere reiciendis modi libero
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        Selma Uma
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        <CarruselOpinion />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CursoPage;
