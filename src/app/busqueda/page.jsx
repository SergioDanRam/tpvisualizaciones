import CardCurso from "@/components/CardCurso";
import CardCursoForSearch from "@/components/CardCursoForSearch";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function BusquedaPage() {
    return (
        <>
            <Header />
            <div className=" mx-auto">
                <div className="shadow-xl bg-gray-200 pt-8 pb-4">
                    <p className="text-3xl font-semibold text-center">Cursos</p>
                    <div className="w-11/12 mx-auto flex justify-between lg:justify-start md:space-y-0 md:flex md:items-center md:gap-4 my-6">
                        <div className="">
                            <select
                                className="w-44 md:w-48 rounded-xl text-black p-2  border-gray-400 border-2"
                                name=""
                                id=""
                            >
                                <option value="">-- Ordenar por --</option>
                                <option value="">Mas relevantes</option>
                                <option value="">Mejor Valorados</option>
                                <option value="">Los más comentados</option>
                                <option value="">Mas recien</option>
                            </select>
                        </div>
                        <div className="">
                            <select
                                className="w-44 md:w-48 rounded-xl text-black p-2 border-gray-400 border-2"
                                name=""
                                id=""
                            >
                                <option value="">-- Filtrar por --</option>
                                <option value="">Menor precio</option>
                                <option value="">Mayor precio</option>
                                <option value="">Gratis</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 mx-auto my-10 space-y-4 flex justify-center items-center">
                    <section className="text-textPrimary-light font-semibold grid grid-cols-2 md:grid-cols-3 md:flex md:flex-wrap md:justify-between gap-4 w-full ">
                        <CardCursoForSearch
                            name="Desarrollo Web Completo con PHP, MySQL,
                                        Fetch"
                            price="3300"
                            teacher="Hernan Gomez"
                            image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                        />
                        <CardCursoForSearch
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            price="4200"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoForSearch
                            name="Curso de Ingles de cero hasta hablar (C2)"
                            price="3800"
                            teacher="Emiliano Guizo"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                        />
                        <CardCursoForSearch
                            name="Python - se un experto en Machine Learning"
                            price="5000"
                            teacher="Sonia Caza"
                            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                        />
                        <CardCursoForSearch
                            name="Construi tu propia Huerta en casa desde cero"
                            price="1600"
                            teacher="Sonia Caza"
                            image="https://nexonorte.com.ar/uploads/noticias/5/2024/05/20240502111228_curso-huerta-organica-parque-ecologico-municipal-inscripciones-nexonorte.webp"
                        />
                        <CardCursoForSearch
                            name="Desarrollo Web Completo con PHP, MySQL,
                                        Fetch"
                            price="3300"
                            teacher="Hernan Gomez"
                            image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                        />
                        <CardCursoForSearch
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            price="4200"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoForSearch
                            name="Curso de Ingles de cero hasta hablar (C2)"
                            price="3800"
                            teacher="Emiliano Guizo"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                        />
                        <CardCursoForSearch
                            name="Python - se un experto en Machine Learning"
                            price="5000"
                            teacher="Sonia Caza"
                            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                        />
                        <CardCursoForSearch
                            name="Construi tu propia Huerta en casa desde cero"
                            price="1600"
                            teacher="Sonia Caza"
                            image="https://nexonorte.com.ar/uploads/noticias/5/2024/05/20240502111228_curso-huerta-organica-parque-ecologico-municipal-inscripciones-nexonorte.webp"
                        />
                        <CardCursoForSearch
                            name="Desarrollo Web Completo con PHP, MySQL,
                                        Fetch"
                            price="3300"
                            teacher="Hernan Gomez"
                            image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                        />
                        <CardCursoForSearch
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            price="4200"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoForSearch
                            name="Curso de Ingles de cero hasta hablar (C2)"
                            price="3800"
                            teacher="Emiliano Guizo"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                        />
                        <CardCursoForSearch
                            name="Python - se un experto en Machine Learning"
                            price="5000"
                            teacher="Sonia Caza"
                            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                        />
                        <CardCursoForSearch
                            name="Construi tu propia Huerta en casa desde cero"
                            price="1600"
                            teacher="Sonia Caza"
                            image="https://nexonorte.com.ar/uploads/noticias/5/2024/05/20240502111228_curso-huerta-organica-parque-ecologico-municipal-inscripciones-nexonorte.webp"
                        />
                        <CardCursoForSearch
                            name="Desarrollo Web Completo con PHP, MySQL,
                                        Fetch"
                            price="3300"
                            teacher="Hernan Gomez"
                            image="https://mundocursos.online/wp-content/uploads/2020/04/cursos-online-desarrollo-web.png"
                        />
                        <CardCursoForSearch
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            price="4200"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                        <CardCursoForSearch
                            name="Curso de Ingles de cero hasta hablar (C2)"
                            price="3800"
                            teacher="Emiliano Guizo"
                            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
                        />
                        <CardCursoForSearch
                            name="Python - se un experto en Machine Learning"
                            price="5000"
                            teacher="Sonia Caza"
                            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
                        />
                        <CardCursoForSearch
                            name="Construi tu propia Huerta en casa desde cero"
                            price="1600"
                            teacher="Sonia Caza"
                            image="https://nexonorte.com.ar/uploads/noticias/5/2024/05/20240502111228_curso-huerta-organica-parque-ecologico-municipal-inscripciones-nexonorte.webp"
                        />
                        <CardCursoForSearch
                            name="Curso de Matematicas para cualquier
                                        nivel"
                            price="4200"
                            teacher="Emiliano Guizo"
                            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
                        />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BusquedaPage;
