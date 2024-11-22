"use client";
import CardCursoCart from "@/components/CardCursoCart";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import CarrouselCurso from "../CarrouselCurso";

function CarritoPage() {
    return (
        <>
            <Header />
            <main className="">
                <div className="shadow-xl pt-12 pb-2 bg-gray-200">
                    <h1 className="text-3xl mb-2 font-semibold  w-11/12 mx-auto">Mi Carrito</h1>
                </div>

                <p className="mt-6 w-11/12 mx-auto text-lg mb-2">
                    3 cursos agregados al carrito
                </p>

                {/* Cursos agregados   */}
                <div className="md:flex md:justify-between w-11/12 mx-auto">
                    <section className="space-y-4 md:w-full md:mr-4">
                        <Link href="/curso">
                            <CardCursoCart
                                name="Desarrollo Web Completo con PHP,
              MySQL, Fetch"
                                price="4500"
                                image="https://impulso06.com/wp-content/uploads/2023/07/El-desarrollo-web-una-profesion-en-auge-en-la-era-digital.png"
                                hours="14"
                                classCant="132"
                            />
                        </Link>
                        <Link href={"/curso"}>
                            <CardCursoCart
                                name="Curso de Matematicas para cualquier
              nivel"
                                price="4500"
                                image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                                hours="42"
                                classCant="482"
                            />
                        </Link>
                        <Link href={"/curso"}>
                            <CardCursoCart
                                name="Curso de Ingles para todos los niveles"
                                price="4500"
                                image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                                hours="36"
                                classCant="249"
                            />
                        </Link>
                    </section>

                    {/* Seccion cupon  */}
                    <div className="mt-10 space-y-4 md:m-0 md:w-4/12">
                        <div className="flex space-x-4 items-center">
                            <h1 className="text-2xl">Total:</h1>
                            <p className="text-4xl font-semibold">$13500</p>
                        </div>

                        <form className="space-y-2">
                            <label>¿Tenes un cupon de descuento?</label>
                            <div>
                                <input
                                    type="text"
                                    className="p-1 border rounded-md w-full border-gray-600 "
                                    placeholder="Introduci el cupón"
                                />
                                <button className="my-2 w-4/12 bg-textSecondary-light dark:bg-accent-darktext-white font-semibold p-2 rounded-md text-center text-white">
                                    Aplicar
                                </button>
                            </div>
                            <button className="mt-4 block w-full h-12 text-xl bg-accent-light dark:bg-accent-darktext-white font-semibold p-2 rounded-md text-center text-white">
                                Pagar
                            </button>
                        </form>
                    </div>
                </div>

                {/* Seccion interes   */}
                <div className="my-12 space-y-6 w-11/12 mx-auto">
                    <h1 className="text-3xl mb-2 font-semibold">
                        Tambien te puede interesar
                    </h1>
                    <CarrouselCurso />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CarritoPage;
