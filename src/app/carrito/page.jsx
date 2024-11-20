"use client";
import CardCursoCart from "@/components/CardCursoCart";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import { FaTrash } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Carrusel from "../Carrousel";

function CarritoPage() {
    return (
        <>
            <Header />
            <main class="mt-12 w-11/12 mx-auto">
                <h1 class="text-2xl mb-2 font-semibold">Mi Carrito</h1>

                <p class="text-lg mb-2">3 cursos agregados al carrito</p>

                {/* Cursos agregados   */}
                <div class="md:flex md:justify-between">
                    <section class="space-y-4 md:w-full md:mr-4">
                        <CardCursoCart
                            name="Desarrollo Web Completo con PHP,
                                            MySQL, Fetch"
                            price="4500"
                            image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                            hours="14"
                            classCant="132"
                        />
                        <CardCursoCart
                            name="Curso de Matematicas para cualquier
                                            nivel"
                            price="4500"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                            hours="42"
                            classCant="482"
                        />
                        <CardCursoCart
                            name="Curso de Ingles para todos los niveles"
                            price="4500"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                            hours="36"
                            classCant="249"
                        />
                        {/* <div class="flex p-2 rounded-lg border border-dashed bg-gray-100 border-background-dark dark:border-background-light md:flex md:justify-between">
                            <div class="flex space-x-4">
                                <div class="">
                                    <img
                                        src="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                                        alt="Imagen 1"
                                        class="rounded-md object-cover h-14 w-28"
                                    />
                                </div>
                                <div class="flex flex-col space-y-4 p-1">
                                    <div class="flex flex-col space-y-1">
                                        <p class="text-sm">
                                            Desarrollo Web Completo con PHP,
                                            MySQL, Fetch
                                        </p>
                                        <Stars />
                                        <div class="flex flex-col md:flex-row md:space-x-2">
                                            <p>132 clases</p>
                                            <div class="flex items-center space-x-1">
                                                <FaClock />
                                                <p>14 horas en total</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex mx-2 h-36 border border-red-500 items-end">
                                <FaTrash className="" />
                            </div>
                            <div class="flex items-center justify-center flex-row  border-l border-dashed border-gray-700">
                                <div className="">
                                    <p class="text-2xl font-semibold tracking-wide mx-2">
                                        $4500
                                    </p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="flex p-2 rounded-lg border border-dashed bg-gray-100 border-background-dark dark:border-background-light md:flex md:justify-between">
                            <div class="flex space-x-4">
                                <div class="">
                                    <img
                                        src="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                                        alt="Imagen 1"
                                        class="rounded-md object-cover h-14 w-28"
                                    />
                                </div>
                                <div class="flex flex-col space-y-4 p-1">
                                    <div class="flex flex-col space-y-1">
                                        <p class="text-sm">
                                            Curso de Matematicas para cualquier
                                            nivel
                                        </p>
                                        <Stars />

                                        <div class="flex flex-col md:flex-row md:space-x-2">
                                            <p>482 clases</p>
                                            <div class="flex items-center space-x-1">
                                                <i class="fa-solid fa-clock"></i>

                                                <p>42 horas en total</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-center flex-col space-y-2">
                                <p class="text-2xl font-semibold tracking-wide">
                                    $4500
                                </p>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div> */}
                        {/* <div class="flex p-2 rounded-lg border border-dashed bg-gray-100 border-background-dark dark:border-background-light md:flex md:justify-between">
                            <div class="flex space-x-4">
                                <div class="">
                                    <img
                                        src="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                                        alt="Imagen 1"
                                        class="rounded-md object-cover h-14 w-28"
                                    />
                                </div>
                                <div class="flex flex-col space-y-4 p-1">
                                    <div class="flex flex-col space-y-1">
                                        <p class="text-sm">
                                            Curso de Matematicas para cualquier
                                            nivel
                                        </p>
                                        <Stars />

                                        <div class="flex flex-col md:flex-row md:space-x-2">
                                            <p>249 clases</p>
                                            <div class="flex items-center space-x-1">
                                                <i class="fa-solid fa-clock"></i>

                                                <p>36 horas en total</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-center flex-col space-y-2">
                                <p class="text-2xl font-semibold tracking-wide">
                                    $4500
                                </p>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                        </div> */}
                    </section>

                    {/* Seccion cupon  */}
                    <div class="mt-10 space-y-4 md:m-0 md:w-4/12">
                        <div class="flex space-x-4 items-center">
                            <h1 class="text-2xl">Total:</h1>
                            <p class="text-4xl font-semibold">$13500</p>
                        </div>

                        <form class="space-y-2">
                            <label>¿Tenes un cupon de descuento?</label>
                            <div>
                                <input
                                    type="text"
                                    class="p-1 border rounded-md w-full border-gray-800 dark:border-0"
                                    placeholder="Introduci el cupón"
                                />
                                <button class="my-2 w-4/12 bg-textSecondary-light dark:bg-accent-darktext-white font-semibold p-2 rounded-md text-center text-white">
                                    Aplicar
                                </button>
                            </div>
                            <button class="mt-4 block w-full h-12 text-xl bg-accent-light dark:bg-accent-darktext-white font-semibold p-2 rounded-md text-center text-white">
                                Pagar
                            </button>
                        </form>
                    </div>
                </div>

                {/* Seccion interes   */}
                {/* <div class="my-10 space-y-4">
                    <p class="text-xl font-semibold">
                        Tambien te podría interesar
                    </p>

                    <section class="text-textPrimary-light font-semibold grid grid-cols-2 md:flex md:justify-around gap-2 md:">
                        <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                            <div>
                                <img
                                    src="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                                    alt="Imagen 1"
                                    class="w-full rounded-md h-full object-cover"
                                />
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Desarrollo Web Completo con PHP, MySQL,
                                        Fetch
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        $4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                            <div>
                                <img
                                    src="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                                    alt="Imagen 1"
                                    class="w-full rounded-md h-full object-cover"
                                />
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Curso de Matematicas para cualquier
                                        nivel
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        $4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                            <div>
                                <img
                                    src="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                                    alt="Imagen 1"
                                    class="w-full rounded-md h-full object-cover"
                                />
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">
                                        Curso de Ingles de cero a experto
                                    </p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        $4500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-52 bg-secondary-light md:grid md:grid-rows-2 p-3 space-y-4 rounded-lg">
                            <div>
                                <img
                                    src="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                                    alt="Imagen 1"
                                    class="w-full rounded-md h-full object-cover"
                                />
                            </div>
                            <div class="flex flex-col justify-between space-y-4">
                                <div class="flex flex-col space-y-2">
                                    <p class="text-sm">Python sin fronteras</p>
                                    <div>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <p class="text-2xl font-semibold tracking-wide">
                                        $4500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> */}
                <div className="my-12">

                <Carrusel />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CarritoPage;
