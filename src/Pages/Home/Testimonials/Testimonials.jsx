import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-farukulwd.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <section>
        <SectionTitle
          subHeading="What Our Client Say"
          heading={"Testimonials"}
        ></SectionTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-24 my-16">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="text-5xl mt-5  font-bold">
                    <FaQuoteLeft></FaQuoteLeft>
                  </p>
                  <p className="py-8">{review.details}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          ;
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
