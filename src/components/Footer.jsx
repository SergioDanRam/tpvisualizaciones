import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export function Footer() {
    return (
        <footer
            className="bg-primary-light :bg-primary- text-white md:min-h-44 md:flex"
        >
            <div
                className="md:w-5/6 md:mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-none md:grid md:grid-cols-3 md:items-center p-4"
            >
                <div className="md:mx-auto">
                    <div className="flex flex-col">
                        <a href="">¿Quienes somos?</a>
                        <a href="">Ayuda y asistencia</a>
                        <a href="">Condiciones</a>
                        <a href="">Politica y Privacidad</a>
                    </div>
                </div>
                <div className="md:mx-auto">
                    <div className="flex flex-col">
                        <a href="pages/foro">Foro</a>
                        <a href="pages/busqueda">Categorias</a>
                        <a href="pages/busqueda">Cursos</a>
                        <a href="#">Preguntas Frecuentes</a>
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
    )
}