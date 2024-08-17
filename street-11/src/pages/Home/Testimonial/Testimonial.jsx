import React, { useEffect, useState } from "react";
import SecTitle from "../../../components/SecTitle/SecTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// import {FaQuoteLeft} from react-icons/fa
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SecTitle heading={"What our clients says"} subHeading={"testimonials"} />
      {/* ______________ */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-16"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center mx-24">
              {" "}
              <Rating
                style={{ maxWidth: 250 }}
                value={review.rating}
                readOnly
              />
              {/* <FaQuoteLeft /> */}
              <p className="text-justify my-12">{review.details}</p>
              <h2 className="text-center text-2xl text-orange-400">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
