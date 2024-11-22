"use client";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegistrarsePage() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    router.push("/");
  });

  return (
    <>
      <Header></Header>
      <main className="text-white mt-12 mb-8 h-full flex flex-col justify-center items-center md:w-7/12 lg:w-5/12 md:mx-auto">
        <div className="bg-accent-light w-10/12 mx-auto rounded-xl p-4">
          <h1 className="text-2xl font-semibold text-center">Registrarse</h1>

          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-evenly min-h-96"
          >
            <div>
              <label className="text-lg">Nombre completo:</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ej. Pedro Lopez"
                className="text-black p-1 border rounded-md w-full"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                })}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm">{errors.nombre.message}</p>
              )}
            </div>
            <div>
              <label className="text-lg">Correo Electrónico:</label>
              <input
                type="email"
                name="correo"
                id="correo"
                placeholder="Ej. correo@correo.com"
                className="text-black p-1 border rounded-md w-full"
                {...register("correo", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Debe ingresar un correo válido",
                  },
                })}
              />
              {errors.correo && (
                <p className="text-red-500 text-sm">{errors.correo.message}</p>
              )}
            </div>

            <div>
              <label className="text-lg">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ej. ********"
                className="p-1 border rounded-md w-full mb-1 text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <Link href="/iniciarSesion">¿Olvidaste tu contraseña?</Link>
            </div>
            <button className="block w-full h-12 text-xl bg-secondary-light text-white font-semibold p-2 rounded-md text-center">
              Regístrate
            </button>
          </form>
          <div className="flex justify-center items-center gap-4">
            <p>o</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-center">
              Inicia sesión con algunas de las siguientes opciones
            </h2>

            <div className="flex justify-evenly">
              <Link href="#">
                <img
                  src="https://i.blogs.es/dc6737/unnamed/650_1200.png"
                  alt="Logo google"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
              <Link href="#">
                <img
                  src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet-thumbnail.png"
                  alt="Logo facebook"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
              <Link href="#">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
                  alt="Logo linkedin"
                  className="rounded-full w-12 h-12 bg-white"
                />
              </Link>
            </div>
            <div className="text-sm flex flex-col space-y-1">
              <p>¿Ya tienes una cuenta en Eduteca?</p>
              <Link
                href="/iniciarSesion"
                className="hover:text-primary-light dark:hover:text-textPrimary-dark"
              >
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default RegistrarsePage;
