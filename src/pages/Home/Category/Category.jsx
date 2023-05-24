import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" />
          <h3 className="text-white text-3xl uppercase text-opacity-70 absolute bottom-10 left-0 right-0 text-center">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide2} alt="" />
          <h3 className="text-white text-3xl uppercase text-opacity-70 absolute bottom-10 left-0 right-0 text-center">
            pizzas
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide3} alt="" />
          <h3 className="text-white text-3xl uppercase text-opacity-70 absolute bottom-10 left-0 right-0 text-center">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide4} alt="" />
          <h3 className="text-white text-3xl uppercase text-opacity-70 absolute bottom-10 left-0 right-0 text-center">
            sandwitch
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slide5} alt="" />
          <h3 className="text-white text-3xl uppercase text-opacity-70 absolute bottom-10 left-0 right-0 text-center">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
