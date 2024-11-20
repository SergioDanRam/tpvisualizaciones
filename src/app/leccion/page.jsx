import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function LeccionPage() {
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

                <form className="space-y-8" id="form-leccion">
                    <fieldset className="space-y-4">
                        <div>
                            <legend className="mb-4" >
                                1. ¿En que tipo de etiqueta se usa
                                `charset="UTF-8` en HTML?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label > body</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p1"
                                    value="correcto"
                                />
                                <label > meta</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label > html</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p1"
                                    value="incorrecto"
                                />
                                <label > head</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                2. ¿Qué etiqueta se utiliza para crear un enlace
                                en HTML?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label > link</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p2"
                                    value="correcto"
                                />
                                <label > a</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label > href</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p2"
                                    value="incorrecto"
                                />
                                <label > url</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                3. ¿Qué atributo HTML se utiliza para abrir un
                                enlace en una nueva pestaña?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label > href="_blank"</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label > target="_new"</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p3"
                                    value="correcto"
                                />
                                <label > target="_blank"</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p3"
                                    value="incorrecto"
                                />
                                <label > href="_new"</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                4. ¿Cuál de las siguientes propiedades de CSS se
                                usa para cambiar el color de fondo de un
                                elemento?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label > color</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p4"
                                    value="correcto"
                                />
                                <label > background</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label > font-color</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p4"
                                    value="incorrecto"
                                />
                                <label > bgcolor</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                5. ¿Qué propiedad CSS se usa para alinear el
                                texto al centro?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label > text-style: center</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label > align-text: center</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p5"
                                    value="correcto"
                                />
                                <label > text-align: center</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p5"
                                    value="incorrecto"
                                />
                                <label > align: center </label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                6. ¿Qué propiedad CSS define el espacio dentro
                                de un elemento?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label > margin</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label > spacing</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p6"
                                    value="correcto"
                                />
                                <label > padding</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p6"
                                    value="incorrecto"
                                />
                                <label > border</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                7. ¿Cuál de estas opciones es una consulta de
                                medios válida en CSS para pantallas de hasta
                                600px de ancho?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p7"
                                    value="correcto"
                                />
                                <label > 
                                    @media screen and (max-width: 600px)
                                </label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label > @media screen width 600px</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label > 
                                    @media (screen-width: 600px)
                                </label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p7"
                                    value="incorrecto"
                                />
                                <label > @media max-width: 600px</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                8. ¿Cuál es la sintaxis correcta para declarar
                                una función en JavaScript?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label > function: miFuncion() {}</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p8"
                                    value="correcto"
                                />
                                <label > function miFuncion() {}</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label > func miFuncion() {}</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p8"
                                    value="incorrecto"
                                />
                                <label > miFuncion function() {}</label>
                            </div>
                        </div>
                        <div>
                            <legend className="mb-4" >
                                9. ¿Qué método se utiliza para escribir un
                                mensaje en la consola en JavaScript?
                            </legend>

                            <div >
                                <input
                                    type="radio"
                                    name="p9"
                                    value="correcto"
                                />
                                <label > console.log()</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label > console.write()</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label > log.console()</label>
                            </div>
                            <div >
                                <input
                                    type="radio"
                                    name="p9"
                                    value="incorrecto"
                                />
                                <label > write.console()</label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="md:text-right">
                        <button
                            type="button"
                            className="bg-secondary-light w-full md:w-auto text-xl text-white font-semibold p-2 rounded-md text-center"
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
