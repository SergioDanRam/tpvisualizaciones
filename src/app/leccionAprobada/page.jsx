import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaMedal } from "react-icons/fa";

function LeccionAprobadaPage() {
    return (
        <>
            <Header></Header>

            <main class="my-12 w-11/12 mx-auto space-y-8 md:w-6/12 md:h-[500px]  md:flex md:flex-col md:justify-center">
                <h1 class="font-bold text-2xl text-center">
                    Lección 1: HTML, CSS y Javascript
                </h1>
                <div class="space-y-2">
                    <p class="text-lg font-semibold lg:text-2xl">
                        Master Frontend NextJs 15 | HTML, CSS, JS, React,
                        Responsive Design
                    </p>
                    <p class="font-semibold">
                        Categoria:
                        <span class="font-normal">Programación Web</span>
                    </p>
                </div>

                <div class="text-center flex flex-col items-center justify-center space-y-8 border border-dashed border-textPrimary-light dark:border-textPrimary-dark rounded-2xl p-6 shadow-2xl md:min-h-72">
                    <div class="text-2xl md:text-4xl font-bold">
                        <h2>¡En hora buena!</h2>
                        <h2>Aprobaste la lección</h2>
                    </div>
                    <div class="flex flex-row items-center justify-center space-x-4">
                        <div>
                            <FaMedal className=" text-textPrimary-light text-4xl md:text-6xl" />
                        </div>
                        <div class="w-4/6 md:text-2xl">
                            <p>
                                Obtuviste 100 puntos. Podes visualizarlos en tu
                                perfil.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default LeccionAprobadaPage;
