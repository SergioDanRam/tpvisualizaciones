import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function IniciarSesionPage() {
  return (
    <>
      <Header />

      <main className="text-white my-12  h-full flex flex-col justify-center items-center md:w-7/12 lg:w-5/12 md:mx-auto">
        <div className="bg-accent-light w-10/12 mx-auto rounded-xl p-4 ">
          <h1 className="text-2xl font-semibold text-center">
            Inicio de Sesión
          </h1>

          <form
            action=""
            className="flex flex-col justify-between my-4 min-h-64"
          >
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
                className="p-1 border rounded-md w-full"
              />
              <Link href="/registrarse" className="text-[12px]">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <button className="block w-full h-12 text-xl bg-secondary-light text-white font-semibold p-2 rounded-md text-center">
              Iniciar Sesión
            </button>
          </form>
          <div className="flex justify-center my-4">
            <p>o</p>
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
              <p>¿Es tu primera vez en Eduteca?</p>
              <Link
                href="/registrarse"
                className="hover:text-primary-light dark:hover:text-textPrimary-dark"
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
