import style from './carousel.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  return (
    <div>
        <Swiper
            className={style.carousel}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={style.slide}>
                <img src="/images/pas1.jpg" alt="" />
                <div className={style.overlay}>
                    <h3 className={style.overlaytext}>The purity of a person's hearth can be quickly measured by how they regard animals.</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <img src="/images/pas2.jpg" alt="" />
                <div className={style.overlay}>
                    <h3 className={style.overlaytext}>Rescued is my favorite breed.</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <img src="/images/pas3.jpg" alt="" />
                <div className={style.overlay}>
                    <h3 className={style.overlaytext}>All pets deserve respect, love and kindness.</h3>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Carousel