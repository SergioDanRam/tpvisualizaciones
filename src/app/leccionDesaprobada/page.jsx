import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

function LeccionDesaprobadaPage() {
    return (
        <>
            <Header></Header>
            <main className="w-11/12 mx-auto space-y-8 md:w-6/12 md:h-[600px] md:flex md:flex-col md:justify-center">
                <h1 className="font-bold text-2xl text-center">
                    Lección 1: HTML, CSS y Javascript
                </h1>
                <div className="space-y-2">
                    <p className="text-lg font-semibold lg:text-2xl">
                        Master Frontend NextJs 15 | HTML, CSS, JS, React,
                        Responsive Design
                    </p>
                    <p className="font-semibold">
                        Categoria:{" "}
                        <span className="font-normal">Programación Web</span>
                    </p>
                </div>

                <div className="text-center flex flex-col items-center justify-center space-y-8 p-6 md:min-h-72">
                    <div className="text-2xl md:text-4xl font-bold">
                        <h2>Resultado insuficiente</h2>
                        <h2>Desaprobaste la lección</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-12">
                        <div className="w-full text-lg space-y-2 md:text-2xl">
                            <p>¡Pero no te preocupes!</p>
                            <p>Podes volver a resolver el formulario</p>
                        </div>
                        <Link
                            href="/leccion"
                            className="mt-4 w-full h-12 text-xl bg-secondary-light dark:bg-accent-darktext-white font-semibold p-2 rounded-md text-center text-white flex items-center justify-center space-x-2"
                        >
                            <FaArrowLeft /> <p>Rehacer Lección</p>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}

export default LeccionDesaprobadaPage;
