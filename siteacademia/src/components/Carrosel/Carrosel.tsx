import { Swiper, SwiperSlide } from "swiper/react";
import './carrosel.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";


export const Carrosel: React.FC = () => {

    return (
        <Container fluid>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="bgImagem1" >
                          <h1>Isso é um teste</h1>
                </SwiperSlide>
                <SwiperSlide className="bgImagem2" >
                          <h1>Isso é um teste</h1>
                </SwiperSlide>
                <SwiperSlide className="bgImagem3">
                          <h1>Isso é um teste</h1>
                </SwiperSlide>
                <SwiperSlide>
                          <h1>Isso é um teste</h1>
                </SwiperSlide>
                <SwiperSlide>
                          <h1>Isso é um teste</h1>
                </SwiperSlide>
                <SwiperSlide>
                          <h1>Isso é um teste</h1>
                </SwiperSlide>


            </Swiper>


        </Container>
    )
}