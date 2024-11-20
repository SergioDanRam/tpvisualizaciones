import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function ForoPage() {
    return (
        <>
        <Header/>
            <div id="cuerpo-publicaciones">
                <h1 id="foro">Foro de novedades</h1>

                <article class="publicacion">
                    <div class="publicacion-info">
                        <h2 class="titulo-publicacion">
                            Nuevo curso de Python!
                        </h2>
                        <p class="texto-publicacion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </p>
                        <img
                            src="https://i.ytimg.com/vi/chPhlsHoEPo/maxresdefault.jpg"
                            alt="img-post"
                            class="img-post"
                        />
                        <button class="boton-me-gusta">
                            <i class="fa-solid fa-heart"></i> Me gusta
                        </button>
                    </div>
                    <div class="publicacion-comentarios">
                        <div class="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                class="foto-perfil-comentario"
                            />
                            <div class="contenido-comentario">
                                <h3 class="usuario-comentario">Pedro Perez</h3>
                                <p class="texto-comentario">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div class="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                class="foto-perfil-comentario"
                            />
                            <div class="contenido-comentario">
                                <h3 class="usuario-comentario">
                                    Juan Martinez
                                </h3>
                                <p class="texto-comentario">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <Link href="#" class="ver-comentarios">
                            Ver todos los comentarios
                        </Link>
                        <div class="comentario">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                class="escribir-comentario"
                            />
                            <Link href="iniciarSesion.html">
                                <button class="boton-publicar-comentario">
                                    Publicar
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>

                <article class="publicacion">
                    <div class="publicacion-info">
                        <h2 class="titulo-publicacion">
                            Nuevo curso de JavaScript!
                        </h2>
                        <p class="texto-publicacion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </p>
                        <img
                            src="https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg"
                            alt="img-post"
                            class="img-post"
                        />
                        <button class="boton-me-gusta">
                            <i class="fa-solid fa-heart"></i> Me gusta
                        </button>
                    </div>
                    <div class="publicacion-comentarios">
                        <div class="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                class="foto-perfil-comentario"
                            />
                            <div class="contenido-comentario">
                                <h3 class="usuario-comentario">Pedro Perez</h3>
                                <p class="texto-comentario">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div class="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                class="foto-perfil-comentario"
                            />
                            <div class="contenido-comentario">
                                <h3 class="usuario-comentario">
                                    Juan Martinez
                                </h3>
                                <p class="texto-comentario">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <a href="#" class="ver-comentarios">
                            Ver todos los comentarios
                        </a>
                        <div class="comentario">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                class="escribir-comentario"
                            />
                            <Link href="iniciarSesion.html">
                                <button class="boton-publicar-comentario">
                                    Publicar
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
            <Footer/>
        </>
    );
}

export default ForoPage;
