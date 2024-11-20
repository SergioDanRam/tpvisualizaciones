"use client";
import { MdDevices } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { BiMath } from "react-icons/bi";
import { FaHeartbeat } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import CardCategory from "@/components/CArdCategory";
import CardTeacher from "@/components/CardTeacher";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import CarrouselCurso from "./CarrouselCurso";
import { useContext } from "react";
import { SesionContext } from "@/context/contextSesion";

export default function App() {
  const { user } = useContext(SesionContext);
  console.log(user);
  return (
    <>
      <div className="font-monoSans bg-background-light :bg-background- text-textPrimary-light :text-textPrimary-">
        {/* Header */}
        <Header />

        {/* Banner Principal  */}
        <div className=" grid grid-rows-2 md:grid-cols-2 md:grid-rows-none md:min-h-96 items-center">
          <div className="w-3/4 mx-auto">
            <div className="flex flex-col space-y-4">
              <p className="md:text-xl lg:text-2xl">
                La eduación es la clave que abre todas las puertas. Comienza tu
                vieje hoy.
              </p>
              <div className="flex justify-start">
                <Link
                  href="/busqueda"
                  className="bg-accent-light :bg-accent- text-textPrimary- :text-textPrimary-light font-semibold p-2 rounded-md text-center lg:text-2xl lg:p-3"
                >
                  Explorar Cursos
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-imagenBanner bg-cover bg-no-repeat h-64 md:min-h-96 lg:min-h-[500px] md:bg-center-top"></div>
        </div>

        <main className="mx-auto">
          {/* Carrousel lo mas elegido   */}
          <section className="my-16 mx-auto md:w-5/6">
            <h2 className="my-8 font-semibold text-lg md:text-2xl lg:text-3xl">
              Lo más elegido por los estudiantes
            </h2>

            {/* Contenedor del carrusel  */}

            {/* <section
							className="text-textPrimary-light font-semibold flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4"
						>

							<CardCurso name='Desarrollo Web Completo con PHP, MySQL, Fetch' price='4500' image='https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png' />
							<CardCurso name='Curso de Matematicas para cualquier nivel' price='4500' image='https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg' />
							<CardCurso name='Curso de Ingles de principiante a experto' price='4500' image='https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg' />
							<CardCurso name='Python - se un experto en inteligencia artificial' price='4500' image='https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg' />

						</section> */}
            <CarrouselCurso />
          </section>

          {/* Seccion Foro  */}
          <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-accent-light :bg-accent- text-textPrimary-light">
            <div className="bg-imagenForo bg-cover bg-center md:min-h-96"></div>

            <div className="w-3/4 mx-auto flex flex-col justify-center space-y-4 md:space-y-6 p-4">
              <p className="lg:text-2xl">
                ¡No aprendas solo! Únete al foro y descubre un espacio donde tus
                dudas se transforman en aprendizaje, y donde puedes conectar con
                otros estudiantes y expertos dispuestos a ayudarte.
              </p>
              <div>
                <Link
                  href="/foro"
                  className="bg-secondary-light hover:bg-secondary- font-medium p-2 rounded-md lg:text-xl"
                >
                  Visita nuestro Foro
                </Link>
              </div>
            </div>
          </div>

          {/* Seccion Categorias  */}
          <section className="mx-auto md:my-16 m-0 md:w-5/6">
            <h2 className="my-8 font-semibold text-lg md:text-2xl lg:text-3xl">
              Explora por categoria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 text-textPrimary-light :text-textPrimary-">
              <CardCategory
                name="Tecnologia e Informatica"
                icon={<MdDevices />}
                colorIcon="text-blue-700"
              />
              <CardCategory
                name="Negocios y Emprendimientos"
                icon={<GiTeamIdea />}
                colorIcon="text-black"
              />
              <CardCategory
                name="Diseño y Creatividad"
                icon={<IoColorPalette />}
                colorIcon="text-pink-500"
              />
              <CardCategory
                name="Desarrollo Personal"
                icon={<FaBookReader />}
                colorIcon="text-purple-700"
              />
              <CardCategory
                name="Idiomas"
                icon={<IoLanguage />}
                colorIcon="text-green-700"
              />
              <CardCategory
                name="Ciencia y Matematicas"
                icon={<BiMath />}
                colorIcon="text-gray-500"
              />
              <CardCategory
                name="Salud y Bienestar"
                icon={<FaHeartbeat />}
                colorIcon="text-red-600"
              />
              <CardCategory
                name="Artes y Humanidades"
                icon={<MdOutlineDesignServices />}
                colorIcon="text-yellow-500"
              />
              <CardCategory
                name="Educacion y Pedagogia"
                icon={<FaChalkboardTeacher />}
                colorIcon="text-orange-500"
              />
              <CardCategory
                name="Ciencia y Medio Ambiente"
                icon={<MdScience />}
                colorIcon="text-green-900"
              />
            </div>
          </section>

          {/* Seccion Instructores  */}
          <div className="mx-auto my-16 md:w-5/6">
            <h2 className="my-8 font-semibold text-lg md:text-2xl lg:text-3xl">
              Aprende de los mejores
            </h2>
            <div className="grid grid-cols-2 md:flex md:justify-center lg:justify-between min-h-96 gap-2 text-textPrimary-light :text-textPrimary-">
              <CardTeacher
                name="Jimena Gomez"
                profession="Ingeniera en Sistemas"
                image="https://media.istockphoto.com/id/1496613385/es/foto/sonriente-mujer-latina-confiada-mirando-a-la-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=rqRojvPigoh80zldNj0uF-zDOuvtCvi1M7hLHr1fIhI="
              />
              <CardTeacher
                name="Sergio Ramirez"
                profession="Profesor experto en SEO"
                image="https://covalto.com/static/78498ccda70933a5f1e3edc3e40d3cbe/34aca/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
              />
              <CardTeacher
                name="Javier Molina"
                profession="Disenador Grafico"
                image="https://media.istockphoto.com/id/1959968954/es/v%C3%ADdeo/hombre-de-negocios-seguro-de-s%C3%AD-mismo-que-usa-una-tableta-digital-en-un-entorno-de-oficina.jpg?s=640x640&k=20&c=LxHMV_1yVepiqhDuYEB1tAeO51X89IeAY0zAWB4Tl6E="
              />
              <CardTeacher
                name="Macarena Arias"
                profession="Profesora de Idiomas"
                image='https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4"'
              />
            </div>
          </div>

          {/* Texto */}
          <h2 className="mx-4 my-8 lg:my-24 text-center font-semibold text-xl md:text-2xl lg:text-3xl lg:w-3/5 lg:mx-auto">
            Da el siguiente paso y unete a la mejor comunidad para tu futuro
            profesional.
          </h2>
        </main>

        {/* Footer   */}
        <Footer />
      </div>
    </>
  );
}
