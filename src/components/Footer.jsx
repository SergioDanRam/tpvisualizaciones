import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary-light :bg-primary- text-white md:min-h-44 md:flex">
            <div className="md:w-5/6 md:mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-none md:grid md:grid-cols-3 md:items-center p-4">
                <div className="md:mx-auto">
                    <div className="flex flex-col">
                        <Link href="">¿Quienes somos?</Link>
                        <Link href="">Ayuda y asistencia</Link>
                        <Link href="">Condiciones</Link>
                        <Link href="">Politica y Privacidad</Link>
                    </div>
                </div>
                <div className="md:mx-auto">
                    <div className="flex flex-col">
                        <Link href="/foro">Foro</Link>
                        <Link href="/busqueda">Categorias</Link>
                        <Link href="/busqueda">Cursos</Link>
                        {/* <Link href="#">Preguntas Frecuentes</Link> */}
                    </div>
                </div>
                <div className="md:mx-auto">
                    <div className="flex flex-col space-y-2">
                        <h2>Contacto</h2>
                        <div className="text-2xl flex justify-between w-40">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
