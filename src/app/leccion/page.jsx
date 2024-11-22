"use client";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LeccionPage() {
    const [respuestas, setRespuestas] = useState({
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: "",
        p7: "",
        p8: "",
        p9: "",
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRespuestas((prevRespuestas) => ({
            ...prevRespuestas,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const allCorrect =
            respuestas.p1 === "correcto" &&
            respuestas.p2 === "correcto" &&
            respuestas.p3 === "correcto";
        respuestas.p4 === "correcto" &&
            respuestas.p5 === "correcto" &&
            respuestas.p6 === "correcto";
        respuestas.p7 === "correcto" &&
            respuestas.p8 === "correcto" &&
            respuestas.p9 === "correcto";
        if (allCorrect) {
            router.push("/leccionAprobada");
        } else {
            router.push("/leccionDesaprobada");
        }
    };

    // function validarLeccion() {
    //     const formulario = document.getElementById("form-leccion");
    //     const preguntas = [
    //         "p1",
    //         "p2",
    //         "p3",
    //         "p4",
    //         "p5",
    //         "p6",
    //         "p7",
    //         "p8",
    //         "p9",
    //     ];
    //     let todasContestadas = true;
    //     let todasCorrectas = true;

    //     preguntas.forEach((pregunta) => {
    //         const opciones = formulario.querySelectorAll(
    //             `input[name="${pregunta}"]`,
    //         );
    //         let preguntaRespondida = false;

    //         opciones.forEach((opcion) => {
    //             if (opcion.checked) {
    //                 preguntaRespondida = true;
    //                 if (opcion.value === "incorrecto") {
    //                     todasCorrectas = false;
    //                 }
    //             }
    //         });

    //         if (!preguntaRespondida) {
    //             todasContestadas = false;
    //         }
    //     });

    //     if (!todasContestadas) {
    //         alert("Por favor responde todas las preguntas.");
    //     } else if (todasCorrectas) {
    //         window.location.href = "leccionAprobada";
    //     } else {
    //         window.location.href = "leccionDesaprobada";
    //     }
    // }

    return (
        <>
            <Header></Header>

            <main className="my-12 w-11/12 mx-auto space-y-8 md:w-6/12">
                <h1 className="font-bold text-2xl text-center">
                    Lección 1: HTML, CSS y Javascript
                </h1>
                <div className="space-y-2">
                    <p className="text-lg font-semibold lg:text-2xl">
                        Master Frontend NextJs 15 | HTML, CSS, JS, React,
                        Responsive Design
                    </p>
                    <p className="font-semibold">
                        Categoria:
                        <span className="font-normal">Programación Web</span>
                    </p>
                </div>

                <form
                    className="space-y-8"
                    id="form-leccion"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="space-y-4">
                        <div>
                            <legend className="mb-4">
                                1. ¿En que tipo de etiqueta se usa
                                `charset="UTF-8` en HTML?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> body</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> meta</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> html</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> head</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                2. ¿Qué etiqueta se utiliza para crear un enlace
                                en HTML?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> link</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> a</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> href</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> url</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                3. ¿Qué atributo HTML se utiliza para abrir un
                                enlace en una nueva pestaña?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> href="_blank"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> target="_new"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> target="_blank"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> href="_new"</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                4. ¿Cuál de las siguientes propiedades de CSS se
                                usa para cambiar el color de fondo de un
                                elemento?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> color</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> background</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> font-color</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> bgcolor</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                5. ¿Qué propiedad CSS se usa para alinear el
                                texto al centro?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> text-style: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> align-text: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> text-align: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> align: center </label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                6. ¿Qué propiedad CSS define el espacio dentro
                                de un elemento?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> margin</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> spacing</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> padding</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> border</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                7. ¿Cuál de estas opciones es una consulta de
                                medios válida en CSS para pantallas de hasta
                                600px de ancho?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label>
                                    @media screen and (max-width: 600px)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> @media screen width 600px</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label>@media (screen-width: 600px)</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> @media max-width: 600px</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                8. ¿Cuál es la sintaxis correcta para declarar
                                una función en JavaScript?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> function: miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> function miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> func miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> miFuncion function() {}</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4">
                                9. ¿Qué método se utiliza para escribir un
                                mensaje en la consola en JavaScript?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="correcto"
                                    onChange={handleChange}
                                />
                                <label> console.log()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> console.write()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> log.console()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                    onChange={handleChange}
                                />
                                <label> write.console()</label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="md:text-right">
                        {" "}
                        <button
                            type="submit"
                            className="bg-secondary-light w-full md:w-auto text-xl text-white font-semibold p-2 rounded-md text-center"
                        >
                            {" "}
                            Enviar Cuestionario{" "}
                        </button>{" "}
                    </div>
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}

export default LeccionPage;
