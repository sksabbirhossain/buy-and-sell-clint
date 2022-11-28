import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/dell.png";
import slider2 from "../../assets/hp.png";
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
                      Dell XPS 13 Plus Laptop
                    </h1>
                    <p className={styles.sliderPra}>
                      Dell XPS 13 Plus 9320 come with twice as powerful as
                      before* in the same size. It features 12th Generation
                      Intel® Core™ i7-1280P (24MB Cache, up to 4.8 GHz, 14
                      cores) and the latest battery technology 3 Cell, 55 Wh,
                      integrated and 60W AC Adapter Type-C, providing long
                      battery life in a lightweight design—all for a stunning
                      combination of speed, performance and premium mobility.
                    </p>
                    <button className={`  ${styles.viewBtn}`}>
                      View <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center h-100 w-75">
                    <img
                      src={slider1}
                      className="img-fluid"
                      alt=""
                      style={{ height: "450px" }}
                    />
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
                    <img
                      src={slider2}
                      className="img-fluid mt-3 mt-md-5"
                      alt=""
                      style={{ height: "450px" }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-md-5 pt-md-5 mb-3 mb-md-0">
                    <h1 className={styles.sliderTitle}>
                      HP Spectre x360 11th Gen
                    </h1>
                    <p className={styles.sliderPra}>
                      HP Spectre x360 Convertible 14-ea1590TU is powered by
                      Intel Core i7-1195G7 (12M Cache, 2.90 GHz up to 5.00 GHz)
                      and 16 GB LPDDR4x-4266 MHz RAM.
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
      </Swiper>
    </>
  );
};

export default Slider;
