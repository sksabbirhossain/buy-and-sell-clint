import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${styles.sliderItems}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="mt-4 mt-md-5 pt-md-5 mb-3 mb-md-0">
                    <h1 className={styles.sliderTitle}>
                      Easy homemade beef burger
                    </h1>
                    <p className={styles.sliderPra}>
                      The classic burger is an all time BBQ favourite! This
                      super easy homemade beef burger recipe gives you delicious
                      patties, packed with onions and herbs for extra flavour,
                      that are perfect for topping with cheese, lettuce and
                      tomato, and sandwiching between floury buns.
                    </p>
                    <button className={`  ${styles.viewBtn}`}>
                      View <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center h-100">
                    {/* <img src={slider1} className="img-fluid" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.sliderItems}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center h-100">
                    {/* <img
                      src={slider2}
                      className="img-fluid mt-3 mt-md-5"
                      alt=""
                    /> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-md-5 pt-md-5 mb-3 mb-md-0">
                    <h1 className={styles.sliderTitle}>
                      Easy Homemade Neapolitan Pizza
                    </h1>
                    <p className={styles.sliderPra}>
                      Neapolitan pizza, also known as Naples-style pizza, is a
                      style of pizza made with tomatoes and mozzarella cheese.
                      The tomatoes must be either San Marzano tomatoes or
                      Pomodorino del Piennolo del Vesuvio, which grow on the
                      volcanic plains to the south of Mount Vesuvius.
                    </p>
                    <button className={`   ${styles.viewBtn}`}>
                      View <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.sliderItems}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className=" mt-4 pt-md-5 mb-3 mb-md-0">
                    <h1 className={styles.sliderTitle}>
                      Easy homemade Linguine pasta
                    </h1>
                    <p className={styles.sliderPra}>
                      Linguine is a type of pasta similar to fettuccine and
                      trenette but elliptical in section rather than flat. It is
                      about 4 millimetres in width, which is wider than
                      spaghetti but not as wide as fettuccine. The name linguine
                      means "little tongues" in Italian, where it is a plural of
                      the feminine linguina.
                    </p>
                    <button className={`  ${styles.viewBtn}`}>
                      View <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center h-100">
                    {/* <img src={slider3} className="img-fluid mt-3 mt-md-5" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
