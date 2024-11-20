import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Opinion from "@/components/Opinion";

const CarrouselOpinion = () => {
    return (
        <section className="text-textPrimary-light font-semibold">
            <Swiper
                slidesPerView={1} // Móvil
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Móvil
                    },
                    768: {
                        slidesPerView: 3, // Tablet
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <Opinion name="Hernan Dario" />
                </SwiperSlide>
                <SwiperSlide>
                    <Opinion name="Gomez Daniel" />
                </SwiperSlide>
                <SwiperSlide>
                    <Opinion name="Camila Ornella" />
                </SwiperSlide>
                <SwiperSlide>
                    <Opinion name="Esteban Mecha" />
                </SwiperSlide>
                <SwiperSlide>
                    <Opinion name="Stefi Meza" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default CarrouselOpinion;
