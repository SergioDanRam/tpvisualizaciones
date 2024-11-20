"use client";
import CardCursoCart from "@/components/CardCursoCart";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Carrusel from "../CarrouselOpinion";
import Link from "next/link";

function CarritoPage() {
  return (
    <>
      <Header />
      <main className="mt-12 w-11/12 mx-auto">
        <h1 className="text-2xl mb-2 font-semibold">Mi Carrito</h1>

        <p className="text-lg mb-2">3 cursos agregados al carrito</p>

        {/* Cursos agregados   */}
        <div className="md:flex md:justify-between">
          <section className="space-y-4 md:w-full md:mr-4">
            <Link href="/curso">
              <CardCursoCart
                name="Desarrollo Web Completo con PHP,
              MySQL, Fetch"
                price="4500"
                image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
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
        <div className="my-12">
          <Carrusel />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CarritoPage;
