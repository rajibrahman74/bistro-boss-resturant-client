import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-resturant-server.vercel.app/reviews")
      .then((res) => res.json()) // Add parentheses after res.json
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24">
              <Rating
                className="text-center mx-auto my-5"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <img
                className="mx-auto w-24"
                src="https://i.ibb.co/mD9tb3X/png-removebg-preview.png"
                alt="png-removebg-preview"
                border="0"
              />
              <p className="text-[#444444] text-lg text-center my-5">
                {review.details}
              </p>
              <h3 className="text-[#CD9003] text-3xl text-center">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
