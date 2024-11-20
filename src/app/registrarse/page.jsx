import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";

function RegistrarsePage() {
  return (
    <>
      <Header></Header>
      <main className="mt-12 mb-8 h-full flex flex-col justify-center items-center md:w-7/12 lg:w-5/12 md:mx-auto">
        <div className="bg-accent-light w-10/12 mx-auto rounded-xl p-4 text-white dark:text-textPrimary-light">
          <h1 className="text-2xl font-semibold text-center">Registrarse</h1>

          <form action="" className="flex flex-col justify-evenly min-h-96">
            <div>
              <label className="text-lg">Nombre completo:</label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Ej. Pedro Lopez"
                className="p-1 border rounded-md w-full"
              />
            </div>
            <div>
              <label className="text-lg">Correo Electronico:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ej. correo@correo.com"
                className="p-1 border rounded-md w-full"
              />
            </div>

            <div>
              <label className="text-lg">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ej. ********"
                className="p-1 border rounded-md w-full mb-1"
              />
              <Link href="forgotPassword.html">¿Olvidaste tu contraseña?</Link>
            </div>
            <button className="block w-full h-12 text-xl bg-secondary-light text-textPrimary-light font-semibold p-2 rounded-md text-center">
              Registrate
            </button>
          </form>
          <div className="flex items-center gap-4">
            <hr className="bg-white w-screen dark:bg-background-dark" />
            <p>o</p>
            <hr className="bg-white w-screen dark:bg-background-dark" />
          </div>

          <div className="space-y-4">
            <h2 className="text-center">
              Inicia sesión con algunas de las siguientes opciones
            </h2>

            <div className="flex justify-evenly">
              <Link href="#">
                <img
                  src="https://i.blogs.es/dc6737/unnamed/650_1200.png"
                  alt="Logo google"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
              <Link href="#">
                <img
                  src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet-thumbnail.png"
                  alt="Logo facebook"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
              <Link href="#">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                  alt="Logo linkedin"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
            </div>
            <div className="text-sm flex flex-col space-y-1">
              <p>¿Es tu primera vez en nombreDeEmpresa?</p>
              <Link
                href="iniciarSesion.html"
                className="hover:text-primary-light dark:hover:text-textPrimary-dark"
              >
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default RegistrarsePage;