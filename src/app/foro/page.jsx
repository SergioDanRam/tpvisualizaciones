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

                <article className="publicacion">
                    <div className="publicacion-info">
                        <h2 className="titulo-publicacion">
                            Nuevo curso de Python!
                        </h2>
                        <p className="texto-publicacion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </p>
                        <img
                            src="https://i.ytimg.com/vi/chPhlsHoEPo/maxresdefault.jpg"
                            alt="img-post"
                            className="img-post"
                        />
                        <button className="boton-me-gusta">
                            <i className="fa-solid fa-heart"></i> Me gusta
                        </button>
                    </div>
                    <div className="publicacion-comentarios">
                        <div className="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                className="foto-perfil-comentario"
                            />
                            <div className="contenido-comentario">
                                <h3 className="usuario-comentario">Pedro Perez</h3>
                                <p className="texto-comentario">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div className="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                className="foto-perfil-comentario"
                            />
                            <div className="contenido-comentario">
                                <h3 className="usuario-comentario">
                                    Juan Martinez
                                </h3>
                                <p className="texto-comentario">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <Link href="#" className="ver-comentarios">
                            Ver todos los comentarios
                        </Link>
                        <div className="comentario">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                className="escribir-comentario"
                            />
                            <Link href="iniciarSesion.html">
                                <button className="boton-publicar-comentario">
                                    Publicar
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>

                <article className="publicacion">
                    <div className="publicacion-info">
                        <h2 className="titulo-publicacion">
                            Nuevo curso de JavaScript!
                        </h2>
                        <p className="texto-publicacion">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                        </p>
                        <img
                            src="https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg"
                            alt="img-post"
                            className="img-post"
                        />
                        <button className="boton-me-gusta">
                            <i className="fa-solid fa-heart"></i> Me gusta
                        </button>
                    </div>
                    <div className="publicacion-comentarios">
                        <div className="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                className="foto-perfil-comentario"
                            />
                            <div className="contenido-comentario">
                                <h3 className="usuario-comentario">Pedro Perez</h3>
                                <p className="texto-comentario">
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div className="comentario">
                            <img
                                src="https://toppng.com/uploads/preview/flat-faces-icons-circle-persona-icon-115628952315akhsf8ncl.png"
                                alt="persona-comentario"
                                className="foto-perfil-comentario"
                            />
                            <div className="contenido-comentario">
                                <h3 className="usuario-comentario">
                                    Juan Martinez
                                </h3>
                                <p className="texto-comentario">
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum
                                </p>
                            </div>
                        </div>
                        <a href="#" className="ver-comentarios">
                            Ver todos los comentarios
                        </a>
                        <div className="comentario">
                            <input
                                type="text"
                                placeholder="Escribe un comentario..."
                                className="escribir-comentario"
                            />
                            <Link href="iniciarSesion.html">
                                <button className="boton-publicar-comentario">
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
