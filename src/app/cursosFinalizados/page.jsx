import CardCursoFinished from "@/components/CardCursoFinished";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function CursosFinalizadosPage() {
    return (
        <>
            <Header></Header>
            <div className="mt-12 w-11/12 mx-auto">
                <p className="text-xl font-semibold text-center">
                    Cursos Finalizados
                </p>
                <div className="my-10 space-y-4 flex justify-center items-center">
                    <section className="text-textPrimary-light font-semibold grid grid-cols-2 md:grid-cols-4 gap-4 md:">
                        <CardCursoFinished
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoFinished
                            name="Curso de Ingles de cero a experto"
                            teacher="Carmen Pucha"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                        />
                        <CardCursoFinished
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            teacher="Pepe Armeno"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoFinished
                            name="Python sin fronteras"
                            teacher="Sofia Akaza"
                            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                        />
                        <CardCursoFinished
                            name="Desarrollo Web Completo con PHP, MySQL,
                                        Fetch"
                            teacher="Gaston Pereira"
                            image="https://impulso06.com/wp-content/uploads/2023/07/El-desarrollo-web-una-profesion-en-auge-en-la-era-digital.png"
                        />
                    </section>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CursosFinalizadosPage;
