import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import { HashLink as Link } from 'react-router-hash-link';
import 'swiper/css';
import './../Cards/cards.sass';
const Sari = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="cards wrap sari">
        <div className="title">Masaar Sari</div>
        <a href="./documents/3.pdf" className="card__link" target={'_blank'}>
          <img src="./img/cards/save.svg" alt="" />
          <span>{t('download')} PDF</span>
        </a>
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
                <Link to='/slider4'>
                <img src="./img/cards/sari1.png" alt="" />
                </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                <Link to='/slider4'>
                <img src="./img/cards/sari2.png" alt="" />
                </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                <Link to='/slider4'>
                <img src="./img/cards/sari3.png" alt="" />
                </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                <Link to='/slider4'>
                <img src="./img/cards/sari4.png" alt="" />
                </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__image">
                <Link to='/slider4'>
                <img src="./img/cards/sari5.png" alt="" />
                </Link>
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
export default Sari;
