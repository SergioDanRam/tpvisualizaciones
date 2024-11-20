import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function IniciarSesionPage() {
    return (
        <>
            <Header />

            <main class="mt-12 mb-8 h-full flex flex-col justify-center items-center md:w-7/12 lg:w-5/12 md:mx-auto">
                <div class="bg-accent-light w-10/12 mx-auto rounded-xl p-4 text-white dark:text-textPrimary-light">
                    <h1 class="text-2xl font-semibold text-center">
                        Inicio de Sesión
                    </h1>

                    <form
                        action=""
                        class="flex flex-col justify-evenly min-h-80"
                    >
                        <div>
                            <label for="" class="text-lg">
                                Correo Electronico:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Ej. correo@correo.com"
                                class="p-1 border rounded-md w-full"
                            />
                        </div>

                        <div>
                            <label for="" class="text-lg">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ej. ********"
                                class="p-1 border rounded-md w-full mb-1"
                            />
                            <Link href="forgotPassword.html">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <button class="block w-full h-12 text-xl bg-secondary-light text-textPrimary-light font-semibold p-2 rounded-md text-center">
                            Iniciar Sesión
                        </button>
                    </form>
                    <div class="flex items-center gap-4">
                        <hr class="bg-white w-screen dark:bg-background-dark" />
                        <p>o</p>
                        <hr class="bg-white w-screen dark:bg-background-dark" />
                    </div>

                    <div class="space-y-4">
                        <h2 class="text-center">
                            Inicia sesión con algunas de las siguientes opciones
                        </h2>

                        <div class="flex justify-evenly">
                            <Link href="#">
                                <img
                                    src="https://i.blogs.es/dc6737/unnamed/650_1200.png"
                                    alt="Logo google"
                                    class="rounded-full w-12 h-12 bg-white"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet-thumbnail.png"
                                    alt="Logo facebook"
                                    class="rounded-full w-12 h-12 bg-white"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                                    alt="Logo linkedin"
                                    class="rounded-full w-12 h-12 bg-white"
                                />
                            </Link>
                        </div>
                        <div class="text-sm flex flex-col space-y-1">
                            <p>¿Es tu primera vez en nombreDeEmpresa?</p>
                            <Link
                                href="registrarse.html"
                                class="hover:text-primary-light dark:hover:text-textPrimary-dark"
                            >
                                Registrate
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default IniciarSesionPage;
