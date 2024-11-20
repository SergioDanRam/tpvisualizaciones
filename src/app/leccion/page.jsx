import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function LeccionPage() {
    return (
        <>
            <Header></Header>

            <main class="my-12 w-11/12 mx-auto space-y-8 md:w-6/12">
                <h1 class="font-bold text-2xl text-center">
                    Lección 1: HTML, CSS y Javascript
                </h1>
                <div class="space-y-2">
                    <p class="text-lg font-semibold lg:text-2xl">
                        Master Frontend NextJs 15 | HTML, CSS, JS, React,
                        Responsive Design
                    </p>
                    <p class="font-semibold">
                        Categoria:
                        <span class="font-normal">Programación Web</span>
                    </p>
                </div>

                <form action="" class="space-y-8" id="form-leccion">
                    <fieldset class="space-y-4">
                        <div>
                            <legend class="mb-4" for="">
                                1. ¿En que tipo de etiqueta se usa
                                `charset="UTF-8` en HTML?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label for="">body</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="correcto"
                                />
                                <label for="">meta</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label for="">html</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label for="">head</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                2. ¿Qué etiqueta se utiliza para crear un enlace
                                en HTML?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label for="">link</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="correcto"
                                />
                                <label for="">a</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label for="">href</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label for="">url</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                3. ¿Qué atributo HTML se utiliza para abrir un
                                enlace en una nueva pestaña?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label for="">href="_blank"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label for="">target="_new"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="correcto"
                                />
                                <label for="">target="_blank"</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label for="">href="_new"</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                4. ¿Cuál de las siguientes propiedades de CSS se
                                usa para cambiar el color de fondo de un
                                elemento?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label for="">color</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="correcto"
                                />
                                <label for="">background</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label for="">font-color</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label for="">bgcolor</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                5. ¿Qué propiedad CSS se usa para alinear el
                                texto al centro?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label for="">text-style: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label for="">align-text: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="correcto"
                                />
                                <label for="">text-align: center</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label for="">align: center </label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                6. ¿Qué propiedad CSS define el espacio dentro
                                de un elemento?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label for="">margin</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label for="">spacing</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="correcto"
                                />
                                <label for="">padding</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label for="">border</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                7. ¿Cuál de estas opciones es una consulta de
                                medios válida en CSS para pantallas de hasta
                                600px de ancho?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="correcto"
                                />
                                <label for="">
                                    @media screen and (max-width: 600px)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label for="">@media screen width 600px</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label for="">
                                    @media (screen-width: 600px)
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label for="">@media max-width: 600px</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                8. ¿Cuál es la sintaxis correcta para declarar
                                una función en JavaScript?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label for="">function: miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="correcto"
                                />
                                <label for="">function miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label for="">func miFuncion() {}</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label for="">miFuncion function() {}</label>
                            </div>
                        </div>
                        <div>
                            <legend class="mb-4" for="">
                                9. ¿Qué método se utiliza para escribir un
                                mensaje en la consola en JavaScript?
                            </legend>

                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="correcto"
                                />
                                <label for="">console.log()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label for="">console.write()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label for="">log.console()</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label for="">write.console()</label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="md:text-right">
                        <button
                            type="button"
                            onclick="validarLeccion()"
                            class="bg-secondary-light w-full md:w-auto text-xl text-white font-semibold p-2 rounded-md text-center"
                        >
                            Enviar Cuestionario
                        </button>
                    </div>
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}

export default LeccionPage;
