import { Swiper, SwiperSlide } from "swiper/react";
import "./carrosel.css";
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
        <SwiperSlide className="bgImagem1">
          <div className="carrosel-title">
            <div>
              <h3>Circuito funcional</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, eaque! Accusamus beatae, eos tenetur ab consequatur
                laudantium, repellendus nobis ducimus magnam ex nam at aliquam
                harum iusto quas odio fuga.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bgImagem2">
          <h3>Isso é um teste</h3>
        </SwiperSlide>
        <SwiperSlide className="bgImagem3">
          <h3>Isso é um teste</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Isso é um teste</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Isso é um teste</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Isso é um teste</h3>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
