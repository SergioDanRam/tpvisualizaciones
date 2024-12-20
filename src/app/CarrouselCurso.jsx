import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import CardCurso from "@/components/CardCurso";

const CarrouselCurso = () => {
  return (
    <section className="text-textPrimary-light font-semibold">
      <Swiper
        className="mySwipper h-[520px] lg:h-[460px]"
        slidesPerView={1} // Móvil
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1, // Móvil
          },
          768: {
            slidesPerView: 2, // Tablet
          },
          900: {
            slidesPerView: 3, // Desktop
          },
          1024: {
            slidesPerView: 4, // Desktop
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <CardCurso
            name="Desarrollo Web Completo con PHP"
            price="4500"
            image="https://impulso06.com/wp-content/uploads/2023/07/El-desarrollo-web-una-profesion-en-auge-en-la-era-digital.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCurso
            name="Curso de Matematicas para cualquier nivel"
            price="4500"
            image="https://ele.chaco.gob.ar/pluginfile.php/403517/mod_label/intro/Matem%C3%A1tica.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCurso
            name="Curso de Ingles de principiante a experto"
            price="4500"
            image="https://trabajarporelmundo.org/wp-content/uploads/2017/09/mejores-cursos-de-ingles-gratuitos.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCurso
            name="Python - se un experto en inteligencia artificial"
            price="4500"
            image="https://i.blogs.es/905760/1366_2000-1-/1366_2000.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardCurso
            name="Construi tu propia Huerta en casa"
            price="4500"
            image="https://nexonorte.com.ar/uploads/noticias/5/2024/05/20240502111228_curso-huerta-organica-parque-ecologico-municipal-inscripciones-nexonorte.webp"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarrouselCurso;
