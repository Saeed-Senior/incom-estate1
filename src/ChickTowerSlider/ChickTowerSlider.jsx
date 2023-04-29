import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import './../Cards/cards.sass';
const ChickTowerSlider = () => {
  const { t } = useTranslation();
  return (
    <div className="slider-chick-tower">
      <div className="cards wrap chick-tower-slider">
        <div className="cards__wrap">
          <div className="photo">5 {t('photo')}</div>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: '.arrow-prev', nextEl: '.arrow-next' }}>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src='./img/chick-tower/main-slide.jpg' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src='./img/chick-tower/slide1.jpg' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src='./img/chick-tower/slide2.jpg' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src='./img/chick-tower/slide3.jpg' alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                  <img src='./img/chick-tower/slide4.jpg' alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="arrows">
            <div className="arrow-prev">
              <svg
                width="60"
                height="59"
                viewBox="0 0 60 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="29.7999" cy="29.4258" r="29.4258" fill="#1F2E36" fillOpacity="0.5" />
                <path
                  d="M33.0686 39.052L23.2594 29.3041L33.0686 19.5562"
                  stroke="white"
                  strokeWidth="2.4523"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="arrow-next">
              <svg
                width="60"
                height="59"
                viewBox="0 0 60 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="30.1207" cy="29.4258" r="29.4258" fill="#1F2E36" fillOpacity="0.5" />
                <path
                  d="M26.8497 39.052L36.6589 29.3041L26.8497 19.5562"
                  stroke="white"
                  strokeWidth="2.4523"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChickTowerSlider;
